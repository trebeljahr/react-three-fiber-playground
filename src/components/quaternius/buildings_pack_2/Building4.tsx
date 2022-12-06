/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Building4_1: THREE.Mesh
    Building4_2: THREE.Mesh
    Building4_3: THREE.Mesh
    Building4_4: THREE.Mesh
    Building4_5: THREE.Mesh
    Building4_6: THREE.Mesh
    Building4_7: THREE.Mesh
  }
  materials: {
    LightBlue: THREE.MeshStandardMaterial
    WhiteBlue: THREE.MeshStandardMaterial
    GreyBlue: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Building4.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Building4_1.geometry} material={materials.LightBlue} />
        <mesh geometry={nodes.Building4_2.geometry} material={materials.WhiteBlue} />
        <mesh geometry={nodes.Building4_3.geometry} material={materials.GreyBlue} />
        <mesh geometry={nodes.Building4_4.geometry} material={materials.White} />
        <mesh geometry={nodes.Building4_5.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Building4_6.geometry} material={materials.Brown} />
        <mesh geometry={nodes.Building4_7.geometry} material={materials.DarkGrey} />
      </group>
    </group>
  )
}

useGLTF.preload('/Building4.glb')
