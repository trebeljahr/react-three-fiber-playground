/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Stock_Sniper_3_1: THREE.Mesh
    Stock_Sniper_3_2: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Stock_Sniper_3.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Stock_Sniper_3_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Stock_Sniper_3_2.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Stock_Sniper_3.glb')
