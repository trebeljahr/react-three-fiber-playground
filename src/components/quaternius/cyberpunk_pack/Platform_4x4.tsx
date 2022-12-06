/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Platform_4x4_1: THREE.Mesh
    Platform_4x4_2: THREE.Mesh
    Platform_4x4_3: THREE.Mesh
    Platform_4x4_4: THREE.Mesh
    Platform_4x4_5: THREE.Mesh
    Platform_4x4_6: THREE.Mesh
  }
  materials: {
    LightGrey: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Texture_Signs: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Platform_4x4.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Platform_4x4_1.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Platform_4x4_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Platform_4x4_3.geometry} material={materials.Texture_Signs} />
        <mesh geometry={nodes.Platform_4x4_4.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Platform_4x4_5.geometry} material={materials.Black} />
        <mesh geometry={nodes.Platform_4x4_6.geometry} material={materials.Orange} />
      </group>
    </group>
  )
}

useGLTF.preload('/Platform_4x4.glb')
