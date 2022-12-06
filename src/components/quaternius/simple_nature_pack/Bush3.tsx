/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bush3_1: THREE.Mesh
    Bush3_2: THREE.Mesh
  }
  materials: {
    Leaves: THREE.MeshStandardMaterial
    Tree: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Bush3.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bush3_1.geometry} material={materials.Leaves} />
        <mesh geometry={nodes.Bush3_2.geometry} material={materials.Tree} />
      </group>
    </group>
  )
}

useGLTF.preload('/Bush3.glb')
