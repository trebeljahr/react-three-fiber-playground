/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_Dirt_Side_Tall_1: THREE.Mesh
    Cube_Dirt_Side_Tall_2: THREE.Mesh
    Cube_Dirt_Side_Tall_3: THREE.Mesh
  }
  materials: {
    Dirt_3: THREE.MeshStandardMaterial
    Dirt_1: THREE.MeshStandardMaterial
    Dirt_2: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Cube_Dirt_Side_Tall.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube_Dirt_Side_Tall_1.geometry} material={materials.Dirt_3} />
        <mesh geometry={nodes.Cube_Dirt_Side_Tall_2.geometry} material={materials.Dirt_1} />
        <mesh geometry={nodes.Cube_Dirt_Side_Tall_3.geometry} material={materials.Dirt_2} />
      </group>
    </group>
  )
}

useGLTF.preload('/Cube_Dirt_Side_Tall.glb')
