/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Turret_Gun_Base_1: THREE.Mesh
    Turret_Gun_Base_2: THREE.Mesh
    Turret_Gun_Base_3: THREE.Mesh
    Turret_Gun_Base_4: THREE.Mesh
    Turret_Gun_Top_1: THREE.Mesh
    Turret_Gun_Top_2: THREE.Mesh
    Turret_Gun_Top_3: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cyberpunk_pack/Turret_Gun.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Turret_Gun_Base_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Turret_Gun_Base_2.geometry} material={materials.Orange} />
        <mesh geometry={nodes.Turret_Gun_Base_3.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Turret_Gun_Base_4.geometry} material={materials.Grey} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Turret_Gun_Top_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Turret_Gun_Top_2.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Turret_Gun_Top_3.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/Turret_Gun.glb')
