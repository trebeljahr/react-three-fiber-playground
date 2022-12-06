/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Grip_AR_6_1: THREE.Mesh
    Grip_AR_6_2: THREE.Mesh
    Grip_AR_6_3: THREE.Mesh
    Grip_AR_6_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi_guns_pack/Grip_AR_6.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Grip_AR_6_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Grip_AR_6_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Grip_AR_6_3.geometry} material={materials.Main} />
        <mesh geometry={nodes.Grip_AR_6_4.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi_guns_pack/Grip_AR_6.glb')
