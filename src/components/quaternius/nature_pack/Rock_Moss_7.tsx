/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Rock_Moss_7_1: THREE.Mesh
    Rock_Moss_7_2: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    Rock: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/glb/nature_pack/Rock_Moss_7.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Rock_Moss_7_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Rock_Moss_7_2.geometry} material={materials.Rock} />
      </group>
    </group>
  )
}
