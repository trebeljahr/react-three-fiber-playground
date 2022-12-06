/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Fruit_1: THREE.Mesh
    Fruit_2: THREE.Mesh
  }
  materials: {
    Red: THREE.MeshStandardMaterial
    Green_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Fruit.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Fruit_1.geometry} material={materials.Red} />
        <mesh geometry={nodes.Fruit_2.geometry} material={materials.Green_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/Fruit.glb')