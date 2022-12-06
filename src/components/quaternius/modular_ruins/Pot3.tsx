/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pot3_1: THREE.Mesh
    Pot3_2: THREE.Mesh
  }
  materials: {
    Pot_Main: THREE.MeshStandardMaterial
    Pot_Detail: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Pot3.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pot3_1.geometry} material={materials.Pot_Main} />
        <mesh geometry={nodes.Pot3_2.geometry} material={materials.Pot_Detail} />
      </group>
    </group>
  )
}

useGLTF.preload('/Pot3.glb')
