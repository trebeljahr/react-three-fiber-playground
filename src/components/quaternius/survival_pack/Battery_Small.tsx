/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Battery_Small_1: THREE.Mesh
    Battery_Small_2: THREE.Mesh
    Battery_Small_3: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/survival_pack/Battery_Small.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={390.26}>
        <mesh geometry={nodes.Battery_Small_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Battery_Small_2.geometry} material={materials.Orange} />
        <mesh geometry={nodes.Battery_Small_3.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/survival_pack/Battery_Small.glb')
