/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Door_6_1: THREE.Mesh
    Door_6_2: THREE.Mesh
    Door_6_3: THREE.Mesh
    Door_6_4: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Wood_Dark: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Door_6.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Door_6_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Door_6_2.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Door_6_3.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Door_6_4.geometry} material={materials.Wood_Dark} />
      </group>
    </group>
  )
}

useGLTF.preload('/Door_6.glb')
