/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Lure_1_1: THREE.Mesh
    Lure_1_2: THREE.Mesh
    Lure_1_3: THREE.Mesh
  }
  materials: {
    Lure_Green: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cute_fish_pack/Lure_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Lure_1_1.geometry} material={materials.Lure_Green} />
        <mesh geometry={nodes.Lure_1_2.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Lure_1_3.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/Lure_1.glb')