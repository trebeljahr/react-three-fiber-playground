/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Column_3_1: THREE.Mesh
    Column_3_2: THREE.Mesh
    Column_3_3: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi/Column_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 4]} scale={100}>
        <mesh geometry={nodes.Column_3_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Column_3_2.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Column_3_3.geometry} material={materials.DarkGrey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi/Column_3.glb')
