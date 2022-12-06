/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Ring5_1: THREE.Mesh
    Ring5_2: THREE.Mesh
  }
  materials: {
    Golden: THREE.MeshStandardMaterial
    Lilac: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Ring5.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Ring5_1.geometry} material={materials.Golden} />
        <mesh geometry={nodes.Ring5_2.geometry} material={materials.Lilac} />
      </group>
    </group>
  )
}

useGLTF.preload('/Ring5.glb')
