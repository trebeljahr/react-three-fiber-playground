/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mountain_Group_2_1: THREE.Mesh
    Mountain_Group_2_2: THREE.Mesh
    Mountain_Group_2_3: THREE.Mesh
  }
  materials: {
    Stone: THREE.MeshStandardMaterial
    Snow: THREE.MeshStandardMaterial
    Dirt: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/real_time_strategy_pack/glb/fantasy_real_time_strategy/Mountain_Group_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Mountain_Group_2_1.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Mountain_Group_2_2.geometry} material={materials.Snow} />
        <mesh geometry={nodes.Mountain_Group_2_3.geometry} material={materials.Dirt} />
      </group>
    </group>
  )
}
