/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    TallWallBricks_1: THREE.Mesh
    TallWallBricks_2: THREE.Mesh
  }
  materials: {
    LightRock: THREE.MeshStandardMaterial
    DarkRock: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/TallWallBricks.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.TallWallBricks_1.geometry} material={materials.LightRock} />
        <mesh geometry={nodes.TallWallBricks_2.geometry} material={materials.DarkRock} />
      </group>
    </group>
  )
}

useGLTF.preload('/TallWallBricks.glb')