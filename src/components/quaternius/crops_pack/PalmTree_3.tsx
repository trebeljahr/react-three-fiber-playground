/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    PalmTree_3_1: THREE.Mesh
    PalmTree_3_2: THREE.Mesh
    PalmTree_3_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Green_Tree: THREE.MeshStandardMaterial
    DarkGreen_Tree: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/PalmTree_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.PalmTree_3_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.PalmTree_3_2.geometry} material={materials.Green_Tree} />
        <mesh geometry={nodes.PalmTree_3_3.geometry} material={materials.DarkGreen_Tree} />
      </group>
    </group>
  )
}

useGLTF.preload('/PalmTree_3.glb')
