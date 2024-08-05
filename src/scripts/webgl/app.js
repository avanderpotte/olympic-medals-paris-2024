import { gsap } from 'gsap'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

import Settings from './settings'
import Continent from './continent'
import Mountains from './mountains'

import { data } from '@/assets/js/data'

export default class WebglApp {
  constructor(wrapperEl, updateHoverId) {
    this.wrapperEl = wrapperEl
    this.updateHoverId = updateHoverId

    this.hoverId = ''
    this.IS_READY = false

    this.onResize()
    this.initEngine()
    this.initRaycaster()
    this.initLights()
    this.initContinents()
    this.initMountains()
    gsap.ticker.add(this.onTick.bind(this))
    window.addEventListener('resize', this.onResize.bind(this))

    gsap.delayedCall(5, async () => {
      const promises = this.continents.map((c) => c.show())
      await Promise.all(promises)
      this.IS_READY = true
    })
  }

  initEngine() {
    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.set(0, 10, 120)
    this.center = new THREE.Vector3()
    this.camera.lookAt(this.center)
    this.cameraGroup = new THREE.Group()
    this.cameraGroup.add(this.camera)
    this.cameraCursor = new THREE.Vector2()

    this.dpr = Math.min(window.devicePixelRatio, 2)
    this.renderer = new THREE.WebGLRenderer({
      dpr: this.dpr,
      antialias: true,
    })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setClearColor(0xf7f7f7)
    THREE.ColorManagement.enabled = true
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.wrapperEl.appendChild(this.renderer.domElement)

    // this.controls = new OrbitControls(this.camera, this.renderer.domElement)
  }

  initRaycaster() {
    this.raycaster = new THREE.Raycaster()
    this.pointer = new THREE.Vector2(-1, -1)

    window.addEventListener('pointermove', this.onPointerMove.bind(this))
  }

  initLights() {
    this.scene.add(new THREE.HemisphereLight(0x9f9f9f, 0xffffff, 1))
    this.scene.add(new THREE.AmbientLight(0xffffff, 1))

    const light1 = new THREE.DirectionalLight(0xffffff, 3)
    light1.position.set(100, 200, 100)
    this.scene.add(light1)

    const light2 = new THREE.DirectionalLight(0xffffff, 3)
    light2.position.set(100, 200, 100)
    this.scene.add(light2)

    const light3 = new THREE.DirectionalLight(0xffffff, 3)
    light3.position.set(-100, -200, -100)
    this.scene.add(light3)
  }

  initContinents() {
    const total = []
    for (const [key, value] of Object.entries(data)) {
      total.push(value.total)
    }
    const min = Math.min(...total)
    const max = Math.max(...total)

    const europe = new Continent(
      'europe',
      0,
      Settings.CONTINENT_COLORS[0],
      gsap.utils.mapRange(min, max, 0, 1, data.europe.total),
    )

    this.scene.add(europe)

    const asia = new Continent(
      'asia',
      1,
      Settings.CONTINENT_COLORS[1],
      gsap.utils.mapRange(min, max, 0, 1, data.asia.total),
    )

    this.scene.add(asia)

    const africa = new Continent(
      'africa',
      2,
      Settings.CONTINENT_COLORS[2],
      gsap.utils.mapRange(min, max, 0, 1, data.africa.total),
    )
    this.scene.add(africa)

    const oceania = new Continent(
      'oceania',
      3,
      Settings.CONTINENT_COLORS[3],
      gsap.utils.mapRange(min, max, 0, 1, data.oceania.total),
    )
    this.scene.add(oceania)

    const america = new Continent(
      'america',
      4,
      Settings.CONTINENT_COLORS[4],
      gsap.utils.mapRange(min, max, 0, 1, data.america.total),
    )
    this.scene.add(america)

    europe.position.x -= 42 + africa.tube + europe.tube

    asia.position.x -= 20 + africa.tube + asia.tube
    asia.position.y -= 20
    asia.position.z += africa.tube + asia.tube

    oceania.position.x += 20 + africa.tube + oceania.tube
    oceania.position.y -= 20
    oceania.position.z += africa.tube + oceania.tube

    america.position.x += 42 + africa.tube + america.tube

    this.continents = [europe, asia, africa, oceania, america]
    this.continentsHits = this.continents.map((c) => c.hitMesh)
  }

  initMountains() {
    this.mountains = new Mountains()
    this.scene.add(this.mountains)
  }

  onPointerMove(event) {
    this.pointer.x = (event.clientX / window.innerWidth) * 2 - 1
    this.pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  onTick(time, dt) {
    this.renderer.render(this.scene, this.camera)

    this.controls && this.controls.update()
    this.mountains && this.mountains.update(time)

    this.cameraCursor.lerp(this.pointer, dt * 0.005)

    this.cameraGroup.rotation.x = Math.PI * 0.05 * this.cameraCursor.y
    this.cameraGroup.rotation.y = Math.PI * 0.05 * this.cameraCursor.x
    this.camera.lookAt(this.center)

    if (!this.IS_READY) return

    this.raycaster.setFromCamera(this.pointer, this.camera)

    const intersects = this.raycaster.intersectObjects(this.continentsHits)
    if (intersects.length) {
      this.renderer.domElement.style.cursor = 'pointer'
      if (this.hoverId !== intersects[0].object.name) {
        if (this.activeEl) {
          this.activeEl.leave()
        }

        this.activeEl = intersects[0].object.parent
        this.hoverId = intersects[0].object.name
        this.activeEl.enter()
        this.updateHoverId(this.hoverId)
      }
    } else if (!intersects.length && this.hoverId) {
      if (this.activeEl) {
        this.activeEl.leave()
        this.activeEl = null
      }
      this.renderer.domElement.style.cursor = 'initial'
      this.hoverId = ''
      this.updateHoverId(this.hoverId)
    }
  }

  onResize() {
    this.dpr = Math.min(window.devicePixelRatio, 2)
    this.wW = this.wrapperEl.offsetWidth
    this.wH = this.wrapperEl.offsetHeight
    this.aspect = this.wW / this.wH

    if (!this.camera) return

    this.camera.aspect = this.aspect
    this.camera.updateProjectionMatrix()
    this.renderer.setPixelRatio(this.dpr)
    this.renderer.setSize(this.wW, this.wH)
  }
}
