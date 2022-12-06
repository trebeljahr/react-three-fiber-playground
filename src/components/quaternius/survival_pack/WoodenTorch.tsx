/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WoodenTorch_1: THREE.Mesh
    WoodenTorch_2: THREE.Mesh
    WoodenTorch_3: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Yellow: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/survival_pack/WoodenTorch.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={137.41}>
        <mesh geometry={nodes.WoodenTorch_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.WoodenTorch_2.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.WoodenTorch_3.geometry} material={materials.Yellow} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/survival_pack/WoodenTorch.glb')
