/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Stairs_SideCover: THREE.Mesh
  }
  materials: {
    Grey_Floor: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_dungeon_1/Stairs_SideCover.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Stairs_SideCover.geometry}
        material={materials.Grey_Floor}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/glb/modular_dungeon_1/Stairs_SideCover.glb')
