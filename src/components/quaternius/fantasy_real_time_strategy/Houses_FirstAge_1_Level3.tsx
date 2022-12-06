/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Houses_FirstAge_1_Level3_1: THREE.Mesh
    Houses_FirstAge_1_Level3_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/Houses_FirstAge_1_Level3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Houses_FirstAge_1_Level3_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Houses_FirstAge_1_Level3_2.geometry} material={materials.Stone} />
      </group>
    </group>
  )
}

useGLTF.preload('/Houses_FirstAge_1_Level3.glb')
