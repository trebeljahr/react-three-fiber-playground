/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Dart_Golden_1: THREE.Mesh
    Dart_Golden_2: THREE.Mesh
  }
  materials: {
    Golden: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Dart_Golden.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Dart_Golden_1.geometry} material={materials.Golden} />
        <mesh geometry={nodes.Dart_Golden_2.geometry} material={materials.LightWood} />
      </group>
    </group>
  )
}

useGLTF.preload('/Dart_Golden.glb')
