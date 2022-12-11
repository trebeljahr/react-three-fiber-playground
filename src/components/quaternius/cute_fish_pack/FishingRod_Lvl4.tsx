/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    FishingRod_Lvl4_1: THREE.Mesh
    FishingRod_Lvl4_2: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cute_fish_pack/FishingRod_Lvl4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.FishingRod_Lvl4_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.FishingRod_Lvl4_2.geometry} material={materials.Gold} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/FishingRod_Lvl4.glb')