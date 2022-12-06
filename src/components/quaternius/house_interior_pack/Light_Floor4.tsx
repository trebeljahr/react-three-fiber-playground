/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Light_Floor4_1: THREE.Mesh
    Light_Floor4_2: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    LightMetal: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Light_Floor4.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Light_Floor4_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Light_Floor4_2.geometry} material={materials.LightMetal} />
      </group>
    </group>
  )
}

useGLTF.preload('/Light_Floor4.glb')