/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Handguard_Pistol_3_1: THREE.Mesh
    Handguard_Pistol_3_2: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Handguard_Pistol_3.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Handguard_Pistol_3_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Handguard_Pistol_3_2.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/Handguard_Pistol_3.glb')
