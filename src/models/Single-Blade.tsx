/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
  }
  materials: {}
}

export function useKelp() {
  const { nodes, materials } = useGLTF('/Single-Blade.glb') as unknown as GLTFResult
  return { geometry: nodes.Cylinder.geometry }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Single-Blade.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} />
    </group>
  )
}

useGLTF.preload('/Single-Blade.glb')
