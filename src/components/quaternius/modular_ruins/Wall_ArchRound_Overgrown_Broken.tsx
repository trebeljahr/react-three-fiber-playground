/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Wall_ArchRound_Overgrown_Broken_1: THREE.Mesh
    Wall_ArchRound_Overgrown_Broken_2: THREE.Mesh
    Wall_ArchRound_Overgrown_Broken_3: THREE.Mesh
    Wall_ArchRound_Overgrown_Broken_4: THREE.Mesh
  }
  materials: {
    Highlights: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Leaf_Texture: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Wall_ArchRound_Overgrown_Broken.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={[100, 100, 5.97]}>
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_Broken_1.geometry} material={materials.Highlights} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_Broken_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_Broken_3.geometry} material={materials.Leaf_Texture} />
        <mesh geometry={nodes.Wall_ArchRound_Overgrown_Broken_4.geometry} material={materials.Green} />
      </group>
    </group>
  )
}

useGLTF.preload('/Wall_ArchRound_Overgrown_Broken.glb')
