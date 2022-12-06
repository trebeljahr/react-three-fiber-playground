/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Details_Vent_4_1: THREE.Mesh
    Details_Vent_4_2: THREE.Mesh
    Details_Vent_4_3: THREE.Mesh
  }
  materials: {
    Accent: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    DarkAccent: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Details_Vent_4.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Details_Vent_4_1.geometry} material={materials.Accent} />
        <mesh geometry={nodes.Details_Vent_4_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.Details_Vent_4_3.geometry} material={materials.DarkAccent} />
      </group>
    </group>
  )
}

useGLTF.preload('/Details_Vent_4.glb')
