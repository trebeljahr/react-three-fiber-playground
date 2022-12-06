/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Stock_SMG_1_1: THREE.Mesh
    Stock_SMG_1_2: THREE.Mesh
    Stock_SMG_1_3: THREE.Mesh
    Stock_SMG_1_4: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Stock_SMG_1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Stock_SMG_1_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Stock_SMG_1_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Stock_SMG_1_3.geometry} material={materials.Black} />
        <mesh geometry={nodes.Stock_SMG_1_4.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Stock_SMG_1.glb')