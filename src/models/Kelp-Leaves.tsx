/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
  }
  materials: {}
}

export function useKelp() {
  const {
    nodes: { Plane },
  } = useGLTF('/Kelp-Leaves.glb') as unknown as GLTFResult
  return Plane
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Kelp-Leaves.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[0.13, 0.04, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.15, 0.15, 0.25]}
      />
    </group>
  )
}

useGLTF.preload('/Kelp-Leaves.glb')
