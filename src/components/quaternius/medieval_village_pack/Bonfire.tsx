/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bonfire_1: THREE.Mesh
    Bonfire_2: THREE.Mesh
    Bonfire_3: THREE.Mesh
    Bonfire_4: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    WoodSide: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Bonfire.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bonfire_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Bonfire_2.geometry} material={materials.WoodSide} />
        <mesh geometry={nodes.Bonfire_3.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.Bonfire_4.geometry} material={materials.Stone_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/Bonfire.glb')
