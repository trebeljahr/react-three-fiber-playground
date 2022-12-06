/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube_Question_1: THREE.Mesh
    Cube_Question_2: THREE.Mesh
    Cube_Question_3: THREE.Mesh
  }
  materials: {
    Blue: THREE.MeshStandardMaterial
    Blue_Dark: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Cube_Question.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube_Question_1.geometry} material={materials.Blue} />
        <mesh geometry={nodes.Cube_Question_2.geometry} material={materials.Blue_Dark} />
        <mesh geometry={nodes.Cube_Question_3.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/Cube_Question.glb')
