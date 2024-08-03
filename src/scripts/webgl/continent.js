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
    this.mesh.rotation.x = Math.PI * gsap.utils.random(-0.5, 0.5, 0.1)
    this.mesh.rotation.y = Math.PI * gsap.utils.random(-0.5, 0.5, 0.1)
    this.mesh.position.z = this.index % 2 ? 10 : -10

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
      delay: gsap.utils.random(0, 0.2, 0.05),
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
        z: 0,
        duration: 1,
        ease: 'power2.out',
      },
      0,
    )
    this.tl.to(
      this.mesh.rotation,
      {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(0.8, 0.8)',
      },
      0,
    )
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
