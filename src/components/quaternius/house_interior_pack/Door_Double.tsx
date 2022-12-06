/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Door_DoubleLeft_1: THREE.Mesh
    Door_DoubleLeft_2: THREE.Mesh
    Door_DoubleRight_1: THREE.Mesh
    Door_DoubleRight_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Door_Double.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-1.74, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Door_DoubleLeft_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Door_DoubleLeft_2.geometry} material={materials.Gold} />
      </group>
      <group position={[1.74, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Door_DoubleRight_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Door_DoubleRight_2.geometry} material={materials.Gold} />
      </group>
    </group>
  )
}

useGLTF.preload('/Door_Double.glb')
