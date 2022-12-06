/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BackWheels: THREE.Mesh
    SchoolBus_1: THREE.Mesh
    SchoolBus_2: THREE.Mesh
    SchoolBus_3: THREE.Mesh
    SchoolBus_4: THREE.Mesh
    SchoolBus_5: THREE.Mesh
    FrontWheels: THREE.Mesh
  }
  materials: {
    Wheel: THREE.MeshStandardMaterial
    Yellow: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
    Bumper: THREE.MeshStandardMaterial
    Lights: THREE.MeshStandardMaterial
    Details: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/SchoolBus.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BackWheels.geometry} material={materials.Wheel} position={[3.19, -0.96, -0.36]} rotation={[0, Math.PI / 2, 0]} scale={100} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.SchoolBus_1.geometry} material={materials.Yellow} />
        <mesh geometry={nodes.SchoolBus_2.geometry} material={materials.Windows} />
        <mesh geometry={nodes.SchoolBus_3.geometry} material={materials.Bumper} />
        <mesh geometry={nodes.SchoolBus_4.geometry} material={materials.Lights} />
        <mesh geometry={nodes.SchoolBus_5.geometry} material={materials.Details} />
      </group>
      <mesh geometry={nodes.FrontWheels.geometry} material={materials.Wheel} position={[-0.37, -0.96, -0.41]} rotation={[0, Math.PI / 2, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/SchoolBus.glb')
