/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    TownCenter_FirstAge_Level2_1: THREE.Mesh
    TownCenter_FirstAge_Level2_2: THREE.Mesh
    TownCenter_FirstAge_Level2_3: THREE.Mesh
    TownCenter_FirstAge_Level2_4: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/TownCenter_FirstAge_Level2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.TownCenter_FirstAge_Level2_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.TownCenter_FirstAge_Level2_2.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.TownCenter_FirstAge_Level2_3.geometry} material={materials.Green} />
        <mesh geometry={nodes.TownCenter_FirstAge_Level2_4.geometry} material={materials.Stone} />
      </group>
    </group>
  )
}

useGLTF.preload('/TownCenter_FirstAge_Level2.glb')
