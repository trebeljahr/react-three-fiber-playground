/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Arch_Gothic_RoundColumn_1: THREE.Mesh
    Arch_Gothic_RoundColumn_2: THREE.Mesh
    Arch_Gothic_RoundColumn_3: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Highlights: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Arch_Gothic_RoundColumn.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Arch_Gothic_RoundColumn_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Arch_Gothic_RoundColumn_2.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Arch_Gothic_RoundColumn_3.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/Arch_Gothic_RoundColumn.glb')