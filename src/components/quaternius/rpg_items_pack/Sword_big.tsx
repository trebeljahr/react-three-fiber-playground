/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sword_big_1: THREE.Mesh
    Sword_big_2: THREE.Mesh
    Sword_big_3: THREE.Mesh
    Sword_big_4: THREE.Mesh
    Sword_big_5: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    DarkSteel: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
    Steel: THREE.MeshStandardMaterial
    LightSteel: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Sword_big.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Sword_big_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Sword_big_2.geometry} material={materials.DarkSteel} />
        <mesh geometry={nodes.Sword_big_3.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Sword_big_4.geometry} material={materials.Steel} />
        <mesh geometry={nodes.Sword_big_5.geometry} material={materials.LightSteel} />
      </group>
    </group>
  )
}

useGLTF.preload('/Sword_big.glb')