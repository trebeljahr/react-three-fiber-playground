/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sight_3_1: THREE.Mesh
    Sight_3_2: THREE.Mesh
    Sight_3_3: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Sight_3.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Sight_3_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Sight_3_2.geometry} material={materials.White} />
        <mesh geometry={nodes.Sight_3_3.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/Sight_3.glb')