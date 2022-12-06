/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sign_Corner_3_Fenced_1: THREE.Mesh
    Sign_Corner_3_Fenced_2: THREE.Mesh
  }
  materials: {
    DarkGrey: THREE.MeshStandardMaterial
    Texture_Signs: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cyberpunk_pack/Sign_Corner_3_Fenced.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Sign_Corner_3_Fenced_1.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Sign_Corner_3_Fenced_2.geometry} material={materials.Texture_Signs} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cyberpunk_pack/Sign_Corner_3_Fenced.glb')
