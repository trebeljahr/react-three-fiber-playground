/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Arrow_Up_1: THREE.Mesh
    Arrow_Up_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Main_Dark: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Arrow_Up.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Arrow_Up_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Arrow_Up_2.geometry} material={materials.Main_Dark} />
      </group>
    </group>
  )
}

useGLTF.preload('/Arrow_Up.glb')