/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Building3_Big_1: THREE.Mesh
    Building3_Big_2: THREE.Mesh
    Building3_Big_3: THREE.Mesh
    Building3_Big_4: THREE.Mesh
    Building3_Big_5: THREE.Mesh
    Building3_Big_6: THREE.Mesh
  }
  materials: {
    BrickRed: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
    LightYellow: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Building3_Big.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Building3_Big_1.geometry} material={materials.BrickRed} />
        <mesh geometry={nodes.Building3_Big_2.geometry} material={materials.Beige} />
        <mesh geometry={nodes.Building3_Big_3.geometry} material={materials.LightYellow} />
        <mesh geometry={nodes.Building3_Big_4.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Building3_Big_5.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Building3_Big_6.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Building3_Big.glb')
