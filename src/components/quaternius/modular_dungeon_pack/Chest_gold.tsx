/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ChestBottom_1: THREE.Mesh
    ChestBottom_2: THREE.Mesh
    ChestBottom_3: THREE.Mesh
    ChestBottom_4: THREE.Mesh
    ChestTop_1: THREE.Mesh
    ChestTop_2: THREE.Mesh
  }
  materials: {
    Gold: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    DarkSteel: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_pack/Chest_gold.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.39, 0.44, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.ChestBottom_1.geometry} material={materials.Gold} />
        <mesh geometry={nodes.ChestBottom_2.geometry} material={materials.Steel} />
        <mesh geometry={nodes.ChestBottom_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.ChestBottom_4.geometry} material={materials.DarkSteel} />
      </group>
      <group position={[0.09, 0.42, 0.02]} rotation={[-Math.PI / 2, -0.75, 0]} scale={100}>
        <mesh geometry={nodes.ChestTop_1.geometry} material={materials.Steel} />
        <mesh geometry={nodes.ChestTop_2.geometry} material={materials.Wood} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_pack/Chest_gold.glb')
