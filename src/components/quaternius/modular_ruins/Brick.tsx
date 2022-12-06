/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Brick_1: THREE.Mesh
    Brick_2: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Highlights: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Brick.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, 0]} scale={[100, 100, 5.97]}>
        <mesh geometry={nodes.Brick_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Brick_2.geometry} material={materials.Highlights} />
      </group>
    </group>
  )
}

useGLTF.preload('/Brick.glb')