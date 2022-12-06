/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Port_FirstAge_Level3_1: THREE.Mesh
    Port_FirstAge_Level3_2: THREE.Mesh
    Port_FirstAge_Level3_3: THREE.Mesh
    Port_FirstAge_Level3_4: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Metal_Light: THREE.MeshStandardMaterial
    Fabric: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/real_time_strategy_pack/glb/fantasy_real_time_strategy/Port_FirstAge_Level3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Port_FirstAge_Level3_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Port_FirstAge_Level3_2.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Port_FirstAge_Level3_3.geometry} material={materials.Metal_Light} />
        <mesh geometry={nodes.Port_FirstAge_Level3_4.geometry} material={materials.Fabric} />
      </group>
    </group>
  )
}
