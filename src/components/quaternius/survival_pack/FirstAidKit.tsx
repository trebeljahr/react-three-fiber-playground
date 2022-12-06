/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    FirstAidKit_1: THREE.Mesh
    FirstAidKit_2: THREE.Mesh
    FirstAidKit_3: THREE.Mesh
  }
  materials: {
    Red: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/FirstAidKit.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={198.94}>
        <mesh geometry={nodes.FirstAidKit_1.geometry} material={materials.Red} />
        <mesh geometry={nodes.FirstAidKit_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.FirstAidKit_3.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/FirstAidKit.glb')
