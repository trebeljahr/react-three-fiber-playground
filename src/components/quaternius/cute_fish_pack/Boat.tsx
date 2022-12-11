/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { DoubleSide } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Boat_1: THREE.Mesh
    Boat_2: THREE.Mesh
  }
  materials: {
    DarkWood: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cute_fish_pack/Boat.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Boat_1.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Boat_2.geometry} material={materials.Wood} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/Boat.glb')
