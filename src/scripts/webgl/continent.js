import { gsap } from 'gsap'
import * as THREE from 'three'

export default class Continent extends THREE.Group {
  constructor(name, index, color, factor) {
    super()
    this.name = name
    this.index = index
    this.color = color
    this.factor = factor
    this.init()
  }

  init() {
    this.tube = 1 + 2 * this.factor
    this.geometry = new THREE.TorusGeometry(20, this.tube, 18, 64)
    this.material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.color),
      metalness: 0,
      roughness: 0,
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    // this.mesh.rotation.x = Math.PI * gsap.utils.random(-0.5, 0.5, 0.1)
    // this.mesh.rotation.y = Math.PI * gsap.utils.random(-0.5, 0.5, 0.1)

    this.tweenTarget = {
      position: new THREE.Vector3(),
      rotation: new THREE.Vector3(),
    }

    if (this.index === 0) {
      this.tweenTarget.rotation.x = -Math.PI * 0.05
      this.tweenTarget.position.z = -0.5

      this.mesh.rotation.x = Math.PI * 0.2
      this.mesh.rotation.y = -Math.PI * 0.2
    } else if (this.index === 1) {
      this.tweenTarget.rotation.x = -Math.PI * 0.1
      this.tweenTarget.rotation.y = Math.PI * 0.1
      this.tweenTarget.position.z = -3

      this.mesh.rotation.x = -Math.PI * 0.2
      this.mesh.rotation.y = Math.PI * 0.1
    } else if (this.index === 2) {
      this.tweenTarget.rotation.y = -Math.PI * 0.1
      this.tweenTarget.position.z = -2

      this.mesh.rotation.y = -Math.PI * 0.2
    } else if (this.index === 3) {
      this.tweenTarget.rotation.x = -Math.PI * 0.05
      this.tweenTarget.rotation.y = Math.PI * 0.05

      this.mesh.rotation.x = -Math.PI * 0.1
      this.mesh.rotation.y = Math.PI * 0.2
    } else if (this.index === 4) {
      this.tweenTarget.rotation.x = -Math.PI * 0.05
      this.tweenTarget.rotation.y = -Math.PI * 0.1

      this.mesh.rotation.x = -Math.PI * 0.2
      this.mesh.rotation.y = -Math.PI * 0.2
    }

    this.mesh.castShadow = true
    this.mesh.scale.set(0, 0, 0)
    this.add(this.mesh)

    this.hitGeometry = new THREE.CircleGeometry(20 + this.tube)
    this.hitMaterial = new THREE.MeshBasicMaterial({
      visible: false,
    })
    this.hitMesh = new THREE.Mesh(this.hitGeometry, this.hitMaterial)
    this.hitMesh.name = this.name
    this.add(this.hitMesh)

    this.position.y = 10
  }

  show() {
    this.tl = gsap.timeline({
      delay: gsap.utils.random(0, 0.3, 0.05),
    })

    this.tl.to(
      this.mesh.scale,
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 1,
        ease: 'elastic.out(0.8, 0.8)',
      },
      0,
    )

    this.tl.to(
      this.mesh.position,
      {
        x: this.tweenTarget.position.x,
        y: this.tweenTarget.position.y,
        z: this.tweenTarget.position.z,
        duration: 1,
        ease: 'power2.out',
      },
      0,
    )
    this.tl.to(
      this.mesh.rotation,
      {
        x: this.tweenTarget.rotation.x,
        y: this.tweenTarget.rotation.y,
        z: this.tweenTarget.rotation.z,
        duration: 1,
        ease: 'elastic.out(0.8, 0.8)',
      },
      0,
    )
    return this.tl
  }

  enter() {
    this.hover && this.hover.pause()
    this.hover = gsap.to(this.mesh.scale, {
      x: 1.05,
      y: 1.05,
      z: 1.05,
      duration: 0.6,
      ease: 'power2.out',
    })
  }

  leave() {
    this.hover && this.hover.pause()
    this.hover = gsap.to(this.mesh.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1,
      ease: 'elastic.out(1, 0.4)',
    })
  }
}
