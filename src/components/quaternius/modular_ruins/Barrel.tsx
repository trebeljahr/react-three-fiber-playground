/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Barrel_1: THREE.Mesh
    Barrel_2: THREE.Mesh
    Barrel_3: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Barrel.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={525.51}>
        <mesh geometry={nodes.Barrel_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Barrel_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Barrel_3.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}

useGLTF.preload('/Barrel.glb')
