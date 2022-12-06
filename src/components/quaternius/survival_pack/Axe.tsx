/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Axe_1: THREE.Mesh
    Axe_2: THREE.Mesh
    Axe_3: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Axe.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={11.18}>
        <mesh geometry={nodes.Axe_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Axe_2.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Axe_3.geometry} material={materials.Red} />
      </group>
    </group>
  )
}

useGLTF.preload('/Axe.glb')
