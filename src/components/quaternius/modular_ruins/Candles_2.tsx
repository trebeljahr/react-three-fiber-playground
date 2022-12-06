/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Candles_2_1: THREE.Mesh
    Candles_2_2: THREE.Mesh
    Candles_2_3: THREE.Mesh
  }
  materials: {
    Candle: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Candles_2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={9.91}>
        <mesh geometry={nodes.Candles_2_1.geometry} material={materials.Candle} />
        <mesh geometry={nodes.Candles_2_2.geometry} material={materials.Light} />
        <mesh geometry={nodes.Candles_2_3.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/Candles_2.glb')