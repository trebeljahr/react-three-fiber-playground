/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Scope_2_1: THREE.Mesh
    Scope_2_2: THREE.Mesh
    Scope_2_3: THREE.Mesh
    Scope_2_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Scope_2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Scope_2_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Scope_2_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Scope_2_3.geometry} material={materials.White} />
        <mesh geometry={nodes.Scope_2_4.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/Scope_2.glb')
