/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Club_1: THREE.Mesh
    Club_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/single_knight_pack/Club.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.29, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Club_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Club_2.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/single_knight_pack/Club.glb')
