/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Light_Street_1_1: THREE.Mesh
    Light_Street_1_2: THREE.Mesh
    Light_Street_1_3: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cyberpunk_pack/Light_Street_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Light_Street_1_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Light_Street_1_2.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Light_Street_1_3.geometry} material={materials.Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/Light_Street_1.glb')
