/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Street_Elevated_Ramp_1: THREE.Mesh
    Street_Elevated_Ramp_2: THREE.Mesh
    Street_Elevated_Ramp_3: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Street_Elevated_Ramp.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Street_Elevated_Ramp_1.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Street_Elevated_Ramp_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Street_Elevated_Ramp_3.geometry} material={materials.White} />
      </group>
    </group>
  )
}

useGLTF.preload('/Street_Elevated_Ramp.glb')
