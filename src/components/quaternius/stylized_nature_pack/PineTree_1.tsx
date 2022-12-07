/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube006: THREE.Mesh
    Cube006_1: THREE.Mesh
  }
  materials: {
    PineTree_Bark: THREE.MeshStandardMaterial
    PineTree_Leaves: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/stylized_nature_pack/PineTree_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube006.geometry} material={materials.PineTree_Bark} />
      <mesh geometry={nodes.Cube006_1.geometry} material={materials.PineTree_Leaves} />
    </group>
  )
}

useGLTF.preload('/glb/stylized_nature_pack/PineTree_1.glb')
