/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Window_4_1: THREE.Mesh
    Window_4_2: THREE.Mesh
    Window_4_3: THREE.Mesh
    Window_4_4: THREE.Mesh
  }
  materials: {
    Windows: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Window_4.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Window_4_1.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Window_4_2.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Window_4_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Window_4_4.geometry} material={materials.Stone} />
      </group>
    </group>
  )
}

useGLTF.preload('/Window_4.glb')
