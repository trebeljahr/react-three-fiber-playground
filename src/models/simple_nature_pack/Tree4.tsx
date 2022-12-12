/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Tree4_1: THREE.Mesh
    Tree4_2: THREE.Mesh
  }
  materials: {
    Tree: THREE.MeshStandardMaterial
    Leaves: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/simple_nature_pack/Tree4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Tree4_1.geometry} material={materials.Tree} />
        <mesh geometry={nodes.Tree4_2.geometry} material={materials.Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/simple_nature_pack/Tree4.glb')