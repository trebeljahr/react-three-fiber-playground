/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Port_SecondAge_Level3_1: THREE.Mesh
    Port_SecondAge_Level3_2: THREE.Mesh
    Port_SecondAge_Level3_3: THREE.Mesh
    Port_SecondAge_Level3_4: THREE.Mesh
    Port_SecondAge_Level3_5: THREE.Mesh
    Port_SecondAge_Level3_6: THREE.Mesh
    Port_SecondAge_Level3_7: THREE.Mesh
    Port_SecondAge_Level3_8: THREE.Mesh
    Port_SecondAge_Level3_9: THREE.Mesh
  }
  materials: {
    Wood_Light: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Metal_Light: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Fabric: THREE.MeshStandardMaterial
    Walls: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/glb/real_time_strategy_pack/glb/fantasy_real_time_strategy/Port_SecondAge_Level3.glb',
  ) as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Port_SecondAge_Level3_1.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Port_SecondAge_Level3_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Port_SecondAge_Level3_3.geometry} material={materials.Main} />
        <mesh geometry={nodes.Port_SecondAge_Level3_4.geometry} material={materials.Metal_Light} />
        <mesh geometry={nodes.Port_SecondAge_Level3_5.geometry} material={materials.White} />
        <mesh geometry={nodes.Port_SecondAge_Level3_6.geometry} material={materials.Fabric} />
        <mesh geometry={nodes.Port_SecondAge_Level3_7.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Port_SecondAge_Level3_8.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Port_SecondAge_Level3_9.geometry} material={materials.Stone_Light} />
      </group>
    </group>
  )
}
