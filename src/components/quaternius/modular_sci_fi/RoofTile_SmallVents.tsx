/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    RoofTile_SmallVents_1: THREE.Mesh
    RoofTile_SmallVents_2: THREE.Mesh
    RoofTile_SmallVents_3: THREE.Mesh
    RoofTile_SmallVents_4: THREE.Mesh
    RoofTile_SmallVents_5: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    DarkAccent: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/RoofTile_SmallVents.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.RoofTile_SmallVents_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.RoofTile_SmallVents_2.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.RoofTile_SmallVents_3.geometry} material={materials.DarkAccent} />
        <mesh geometry={nodes.RoofTile_SmallVents_4.geometry} material={materials.Accent} />
        <mesh geometry={nodes.RoofTile_SmallVents_5.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/RoofTile_SmallVents.glb')
