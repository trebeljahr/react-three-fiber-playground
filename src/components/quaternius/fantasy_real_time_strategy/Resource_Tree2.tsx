/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Resource_Tree2_1: THREE.Mesh
    Resource_Tree2_2: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/real_time_strategy_pack/glb/fantasy_real_time_strategy/Resource_Tree2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Resource_Tree2_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Resource_Tree2_2.geometry} material={materials.Green} />
      </group>
    </group>
  )
}
