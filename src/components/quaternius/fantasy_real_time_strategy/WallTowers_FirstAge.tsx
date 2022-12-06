/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WallTowers_FirstAge_1: THREE.Mesh
    WallTowers_FirstAge_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/real_time_strategy_pack/glb/fantasy_real_time_strategy/WallTowers_FirstAge.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.WallTowers_FirstAge_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.WallTowers_FirstAge_2.geometry} material={materials.Wood_Light} />
      </group>
    </group>
  )
}
