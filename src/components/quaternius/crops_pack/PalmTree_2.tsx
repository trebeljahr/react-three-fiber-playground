/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    PalmTree_2_1: THREE.Mesh
    PalmTree_2_2: THREE.Mesh
    PalmTree_2_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Green_Tree: THREE.MeshStandardMaterial
    DarkGreen_Tree: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/crops_pack/glb/crops_pack/PalmTree_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.PalmTree_2_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.PalmTree_2_2.geometry} material={materials.Green_Tree} />
        <mesh geometry={nodes.PalmTree_2_3.geometry} material={materials.DarkGreen_Tree} />
      </group>
    </group>
  )
}
