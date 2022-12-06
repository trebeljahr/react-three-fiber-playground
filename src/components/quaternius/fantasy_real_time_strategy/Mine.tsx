/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mine_1: THREE.Mesh
    Mine_2: THREE.Mesh
    Mine_3: THREE.Mesh
    Mine_4: THREE.Mesh
    Mine_5: THREE.Mesh
  }
  materials: {
    Stone: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Metal_Light: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/real_time_strategy_pack/glb/fantasy_real_time_strategy/Mine.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Mine_1.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Mine_2.geometry} material={materials.Metal} />
        <mesh geometry={nodes.Mine_3.geometry} material={materials.Metal_Light} />
        <mesh geometry={nodes.Mine_4.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Mine_5.geometry} material={materials.Wood_Light} />
      </group>
    </group>
  )
}
