/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Details_Cylinder_1: THREE.Mesh
    Details_Cylinder_2: THREE.Mesh
  }
  materials: {
    DarkAccent: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Details_Cylinder.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Details_Cylinder_1.geometry} material={materials.DarkAccent} />
        <mesh geometry={nodes.Details_Cylinder_2.geometry} material={materials.Accent} />
      </group>
    </group>
  )
}

useGLTF.preload('/Details_Cylinder.glb')
