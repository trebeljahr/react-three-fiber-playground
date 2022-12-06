/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WoodFire_1: THREE.Mesh
    WoodFire_2: THREE.Mesh
    WoodFire_3: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Fire: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_1/Woodfire.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.WoodFire_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.WoodFire_2.geometry} material={materials.Wood} />
        <mesh geometry={nodes.WoodFire_3.geometry} material={materials.Fire} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_1/Woodfire.glb')
