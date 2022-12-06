/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Compass_Closed_1: THREE.Mesh
    Compass_Closed_2: THREE.Mesh
  }
  materials: {
    Yellow: THREE.MeshStandardMaterial
    DarkYellow: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Compass_Closed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Compass_Closed_1.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.Compass_Closed_2.geometry} material={materials.DarkYellow} />
      </group>
    </group>
  )
}

useGLTF.preload('/Compass_Closed.glb')
