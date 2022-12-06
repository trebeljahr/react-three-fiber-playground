/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Collectible_Gear: THREE.Mesh
  }
  materials: {
    Orange: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Collectible_Gear.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Collectible_Gear.geometry} material={materials.Orange} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/Collectible_Gear.glb')
