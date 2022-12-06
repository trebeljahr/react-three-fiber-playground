/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Stairs_1: THREE.Mesh
    Stairs_2: THREE.Mesh
  }
  materials: {
    Stone_Light: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Stairs.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Stairs_1.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Stairs_2.geometry} material={materials.Stone_Dark} />
      </group>
    </group>
  )
}

useGLTF.preload('/Stairs.glb')
