/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Scroll_1: THREE.Mesh
    Scroll_2: THREE.Mesh
  }
  materials: {
    Beige: THREE.MeshStandardMaterial
    DarkRed: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Scroll.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Scroll_1.geometry} material={materials.Beige} />
        <mesh geometry={nodes.Scroll_2.geometry} material={materials.DarkRed} />
      </group>
    </group>
  )
}

useGLTF.preload('/Scroll.glb')
