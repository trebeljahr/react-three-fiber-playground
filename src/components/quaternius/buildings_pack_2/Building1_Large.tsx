/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Building1_Large_1: THREE.Mesh
    Building1_Large_2: THREE.Mesh
    Building1_Large_3: THREE.Mesh
    Building1_Large_4: THREE.Mesh
    Building1_Large_5: THREE.Mesh
    Building1_Large_6: THREE.Mesh
    Building1_Large_7: THREE.Mesh
  }
  materials: {
    Beige: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    LightYellow: THREE.MeshStandardMaterial
    DarkRed: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/buildings_pack_2/Building1_Large.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Building1_Large_1.geometry} material={materials.Beige} />
        <mesh geometry={nodes.Building1_Large_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Building1_Large_3.geometry} material={materials.White} />
        <mesh geometry={nodes.Building1_Large_4.geometry} material={materials.LightYellow} />
        <mesh geometry={nodes.Building1_Large_5.geometry} material={materials.DarkRed} />
        <mesh geometry={nodes.Building1_Large_6.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Building1_Large_7.geometry} material={materials.Brown} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/buildings_pack_2/Building1_Large.glb')
