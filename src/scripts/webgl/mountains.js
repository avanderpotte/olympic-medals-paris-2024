import { gsap } from 'gsap'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
    varying float vNoise;

    uniform float uTime;
    uniform float uBumpNoise;

    //	Simplex 3D Noise
    //	by Ian McEwan, Ashima Arts
    //
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    float snoise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;

        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        //  x0 = x0 - 0. + 0.0 * C
        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1. + 3.0 * C.xxx;

        // Permutations
        i = mod(i, 289.0 );
        vec4 p = permute( permute( permute(
                    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        // Gradients
        // ( N*N points uniformly over a square, mapped onto an octahedron.)
        float n_ = 1.0/7.0; // N=7
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        //Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                        dot(p2,x2), dot(p3,x3) ) );
    }


    void main() {
        vec2 noiseCoords = uv * vec2(3.0, 4.0);
        float noise = snoise(vec3(
          noiseCoords.x + uTime * 30.,
          noiseCoords.y + uTime * 20.,
          uBumpNoise + uTime * 5.0
        ));
        vNoise = noise;

        vec3 pos = vec3(position.x, position.y, position.z + noise * 30. * uBumpNoise);


        gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
    }
`

const fragmentShader = /* glsl */ `
    varying float vNoise;

    uniform vec3 uColor;

    void main() {

        // vec3 finalColor = mix(vec3(1.0, 0.0, 0.0), vec3(0.0, 0.0, 1.0), vNoise);
        // gl_FragColor = vec4(finalColor, 1.0);
        gl_FragColor = vec4(uColor, vNoise);
    }
`

export default class Mountains extends THREE.Group {
  constructor(color) {
    super()
    this.init()
  }

  init() {
    this.geometry = new THREE.PlaneGeometry(1000, 1000, 128, 128)
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0xe9ecef) },
        uTime: { value: 0 },
        uBumpNoise: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      //   wireframe: true,
      transparent: true,
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.rotation.x = -Math.PI * 0.5
    this.mesh.position.y -= 65
    this.add(this.mesh)

    gsap.to(this.material.uniforms.uBumpNoise, {
      value: 1,
      duration: 3.5,
      delay: 3,
      ease: 'power2.inOut',
    })
  }

  update(time, dt) {
    this.material.uniforms.uTime.value = time * 0.005
  }
}
