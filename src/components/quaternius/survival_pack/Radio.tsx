/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Radio_1: THREE.Mesh
    Radio_2: THREE.Mesh
    Radio_3: THREE.Mesh
    Radio_4: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Radio.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={242}>
        <mesh geometry={nodes.Radio_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Radio_2.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Radio_3.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Radio_4.geometry} material={materials.Red} />
      </group>
    </group>
  )
}

useGLTF.preload('/Radio.glb')
