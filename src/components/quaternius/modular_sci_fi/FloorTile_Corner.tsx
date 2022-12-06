/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    FloorTile_Corner_1: THREE.Mesh
    FloorTile_Corner_2: THREE.Mesh
    FloorTile_Corner_3: THREE.Mesh
    FloorTile_Corner_4: THREE.Mesh
    FloorTile_Corner_5: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    DarkAccent: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/FloorTile_Corner.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.FloorTile_Corner_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.FloorTile_Corner_2.geometry} material={materials.Accent} />
        <mesh geometry={nodes.FloorTile_Corner_3.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.FloorTile_Corner_4.geometry} material={materials.DarkAccent} />
        <mesh geometry={nodes.FloorTile_Corner_5.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/FloorTile_Corner.glb')
