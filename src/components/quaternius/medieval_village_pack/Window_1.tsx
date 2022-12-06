/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Window_1_1: THREE.Mesh
    Window_1_2: THREE.Mesh
    Window_1_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Window_1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Window_1_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Window_1_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Window_1_3.geometry} material={materials.Windows} />
      </group>
    </group>
  )
}

useGLTF.preload('/Window_1.glb')
