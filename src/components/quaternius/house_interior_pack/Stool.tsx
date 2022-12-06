/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Stool_1: THREE.Mesh
    Stool_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Cushin: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Stool.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Stool_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Stool_2.geometry} material={materials.Cushin} />
      </group>
    </group>
  )
}

useGLTF.preload('/Stool.glb')