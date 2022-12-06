/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Support_Tall_1: THREE.Mesh
    Support_Tall_2: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Highlights: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Support_Tall.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={133.29}>
        <mesh geometry={nodes.Support_Tall_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Support_Tall_2.geometry} material={materials.Highlights} />
      </group>
    </group>
  )
}

useGLTF.preload('/Support_Tall.glb')
