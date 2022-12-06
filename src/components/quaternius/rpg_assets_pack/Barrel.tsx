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
    Wood: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_assets_pack/Barrel.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Barrel_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Barrel_2.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Barrel_3.geometry} material={materials.DarkWood} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_assets_pack/Barrel.glb')
