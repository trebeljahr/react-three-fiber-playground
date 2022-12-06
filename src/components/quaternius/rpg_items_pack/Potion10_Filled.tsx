/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Potion10_Filled_1: THREE.Mesh
    Potion10_Filled_2: THREE.Mesh
    Potion10_Filled_3: THREE.Mesh
  }
  materials: {
    Glass: THREE.MeshStandardMaterial
    Liquid_Cyan: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/rpg_items_pack/Potion10_Filled.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Potion10_Filled_1.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Potion10_Filled_2.geometry} material={materials.Liquid_Cyan} />
        <mesh geometry={nodes.Potion10_Filled_3.geometry} material={materials.Brown} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/rpg_items_pack/Potion10_Filled.glb')
