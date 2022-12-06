/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Handle_1: THREE.Mesh
    Handle_2: THREE.Mesh
    FrontWheel: THREE.Mesh
    Saddle: THREE.Mesh
    Frame: THREE.Mesh
    BackWheel: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/SquareFrameBicycle.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.23, -1.3]} rotation={[-1.36, 0, 0]} scale={5.5}>
        <mesh geometry={nodes.Handle_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Handle_2.geometry} material={materials['Material.005']} />
      </group>
      <mesh geometry={nodes.FrontWheel.geometry} material={materials['Material.002']} position={[0, 0, -1.68]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={12.87} />
      <mesh geometry={nodes.Saddle.geometry} material={materials['Material.003']} position={[0, 1.84, 1.4]} rotation={[-Math.PI / 2, 0, 0]} scale={14.94} />
      <mesh geometry={nodes.Frame.geometry} material={materials['Material.001']} position={[0, 0.66, 1.15]} rotation={[-1.36, 0, 0]} scale={5.5} />
      <mesh geometry={nodes.BackWheel.geometry} material={materials['Material.002']} position={[0, 0, 2.25]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={12.87} />
    </group>
  )
}

useGLTF.preload('/SquareFrameBicycle.glb')
