/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WatchTower_SecondAge_Level3_1: THREE.Mesh
    WatchTower_SecondAge_Level3_2: THREE.Mesh
    WatchTower_SecondAge_Level3_3: THREE.Mesh
    WatchTower_SecondAge_Level3_4: THREE.Mesh
    WatchTower_SecondAge_Level3_5: THREE.Mesh
  }
  materials: {
    Stone_Light: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/WatchTower_SecondAge_Level3.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.WatchTower_SecondAge_Level3_1.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.WatchTower_SecondAge_Level3_2.geometry} material={materials.Stone} />
        <mesh geometry={nodes.WatchTower_SecondAge_Level3_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.WatchTower_SecondAge_Level3_4.geometry} material={materials.Main} />
        <mesh geometry={nodes.WatchTower_SecondAge_Level3_5.geometry} material={materials.Green} />
      </group>
    </group>
  )
}