/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    TV_2_1: THREE.Mesh
    TV_2_2: THREE.Mesh
    TV_2_3: THREE.Mesh
    TV_2_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Texture_Signs: THREE.MeshStandardMaterial
    MetalLight: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/TV_2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.TV_2_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.TV_2_2.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.TV_2_3.geometry} material={materials.Texture_Signs} />
        <mesh geometry={nodes.TV_2_4.geometry} material={materials.MetalLight} />
      </group>
    </group>
  )
}

useGLTF.preload('/TV_2.glb')
