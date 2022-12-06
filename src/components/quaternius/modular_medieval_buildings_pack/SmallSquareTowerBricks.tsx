/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    SmallSquareTowerBricks_1: THREE.Mesh
    SmallSquareTowerBricks_2: THREE.Mesh
    SmallSquareTowerBricks_3: THREE.Mesh
  }
  materials: {
    LightRock: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    DarkRock: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/SmallSquareTowerBricks.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.SmallSquareTowerBricks_1.geometry} material={materials.LightRock} />
        <mesh geometry={nodes.SmallSquareTowerBricks_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.SmallSquareTowerBricks_3.geometry} material={materials.DarkRock} />
      </group>
    </group>
  )
}

useGLTF.preload('/SmallSquareTowerBricks.glb')
