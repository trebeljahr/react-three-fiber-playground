/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Petals_2: THREE.Mesh
  }
  materials: {
    Flowers: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Petals_2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Petals_2.geometry} material={materials.Flowers} rotation={[1.11, 0.81, -0.84]} scale={100} />
    </group>
  )
}

useGLTF.preload('/Petals_2.glb')