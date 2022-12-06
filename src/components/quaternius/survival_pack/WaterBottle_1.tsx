/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WaterBottle_1_1: THREE.Mesh
    WaterBottle_1_2: THREE.Mesh
  }
  materials: {
    Plastic: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/WaterBottle_1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={198.94}>
        <mesh geometry={nodes.WaterBottle_1_1.geometry} material={materials.Plastic} />
        <mesh geometry={nodes.WaterBottle_1_2.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/WaterBottle_1.glb')
