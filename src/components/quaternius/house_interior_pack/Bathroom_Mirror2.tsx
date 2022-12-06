/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bathroom_Mirror2_1: THREE.Mesh
    Bathroom_Mirror2_2: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Mirror: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Bathroom_Mirror2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bathroom_Mirror2_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Bathroom_Mirror2_2.geometry} material={materials.Mirror} />
      </group>
    </group>
  )
}

useGLTF.preload('/Bathroom_Mirror2.glb')