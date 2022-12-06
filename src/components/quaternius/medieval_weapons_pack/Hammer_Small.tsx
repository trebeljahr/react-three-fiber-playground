/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Hammer_small_1: THREE.Mesh
    Hammer_small_2: THREE.Mesh
    Hammer_small_3: THREE.Mesh
    Hammer_small_4: THREE.Mesh
  }
  materials: {
    Steel: THREE.MeshStandardMaterial
    LightSteel: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Hammer_Small.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Hammer_small_1.geometry} material={materials.Steel} />
        <mesh geometry={nodes.Hammer_small_2.geometry} material={materials.LightSteel} />
        <mesh geometry={nodes.Hammer_small_3.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Hammer_small_4.geometry} material={materials.LightWood} />
      </group>
    </group>
  )
}

useGLTF.preload('/Hammer_Small.glb')
