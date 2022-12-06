/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    StoneWall_1: THREE.Mesh
    StoneWall_2: THREE.Mesh
  }
  materials: {
    Rock: THREE.MeshStandardMaterial
    RockLight: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_pack/ModularStoneWall.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.StoneWall_1.geometry} material={materials.Rock} />
        <mesh geometry={nodes.StoneWall_2.geometry} material={materials.RockLight} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_pack/ModularStoneWall.glb')
