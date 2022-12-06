/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cannon_1: THREE.Mesh
    Cannon_2: THREE.Mesh
    Cannon_3: THREE.Mesh
    Cannon_4: THREE.Mesh
    Cannon_Wheels_1: THREE.Mesh
    Cannon_Wheels_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    DarkMetal: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/platformer_game_pack/Cannon.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cannon_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Cannon_2.geometry} material={materials.DarkMetal} />
        <mesh geometry={nodes.Cannon_3.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Cannon_4.geometry} material={materials.White} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cannon_Wheels_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Cannon_Wheels_2.geometry} material={materials.Wood_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Cannon.glb')
