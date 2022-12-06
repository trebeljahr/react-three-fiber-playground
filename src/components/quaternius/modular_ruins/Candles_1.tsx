/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Candles_1_1: THREE.Mesh
    Candles_1_2: THREE.Mesh
    Candles_1_3: THREE.Mesh
  }
  materials: {
    Candle: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_ruins/Candles_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={9.91}>
        <mesh geometry={nodes.Candles_1_1.geometry} material={materials.Candle} />
        <mesh geometry={nodes.Candles_1_2.geometry} material={materials.Light} />
        <mesh geometry={nodes.Candles_1_3.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_ruins/Candles_1.glb')
