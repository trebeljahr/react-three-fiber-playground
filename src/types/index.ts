import { GLTF } from 'three-stdlib'

export type GLTFResult = GLTF & {
  nodes: {
    [x: string]: THREE.Mesh
  }
  materials: {
    [x: string]: THREE.Material
  }
}
