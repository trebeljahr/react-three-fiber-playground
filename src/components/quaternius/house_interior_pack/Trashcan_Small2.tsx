/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Trashcan_Small2: THREE.Mesh
  }
  materials: {
    LightMetal: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Trashcan_Small2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Trashcan_Small2.geometry} material={materials.LightMetal} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/Trashcan_Small2.glb')
