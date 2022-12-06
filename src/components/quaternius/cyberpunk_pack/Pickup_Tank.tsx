/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pickup_Tank_1: THREE.Mesh
    Pickup_Tank_2: THREE.Mesh
    Pickup_Tank_3: THREE.Mesh
    Pickup_Tank_4: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    LightGrey: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cyberpunk_pack/Pickup_Tank.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pickup_Tank_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Pickup_Tank_2.geometry} material={materials.Orange} />
        <mesh geometry={nodes.Pickup_Tank_3.geometry} material={materials.LightGrey} />
        <mesh geometry={nodes.Pickup_Tank_4.geometry} material={materials.LightGreen} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/Pickup_Tank.glb')
