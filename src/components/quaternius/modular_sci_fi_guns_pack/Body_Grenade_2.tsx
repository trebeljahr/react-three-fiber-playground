/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Body_Grenade_2_1: THREE.Mesh
    Body_Grenade_2_2: THREE.Mesh
    Body_Grenade_2_3: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Body_Grenade_2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Body_Grenade_2_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Body_Grenade_2_2.geometry} material={materials.White} />
        <mesh geometry={nodes.Body_Grenade_2_3.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/Body_Grenade_2.glb')
