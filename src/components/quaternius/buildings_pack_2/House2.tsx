/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    House2_1: THREE.Mesh
    House2_2: THREE.Mesh
    House2_3: THREE.Mesh
    House2_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/buildings_pack_2/House2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.House2_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.House2_2.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.House2_3.geometry} material={materials.White} />
        <mesh geometry={nodes.House2_4.geometry} material={materials.Brown} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/buildings_pack_2/House2.glb')
