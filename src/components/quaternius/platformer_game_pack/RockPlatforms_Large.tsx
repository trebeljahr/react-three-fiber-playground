/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    RockPlatforms_Large: THREE.Mesh
  }
  materials: {
    Rock: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/RockPlatforms_Large.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.RockPlatforms_Large.geometry} material={materials.Rock} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/RockPlatforms_Large.glb')
