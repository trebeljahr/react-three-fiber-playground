/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Carpet_Round_1: THREE.Mesh
    Carpet_Round_2: THREE.Mesh
  }
  materials: {
    LightOrange: THREE.MeshStandardMaterial
    DarkRed: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Carpet_Round.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Carpet_Round_1.geometry} material={materials.LightOrange} />
        <mesh geometry={nodes.Carpet_Round_2.geometry} material={materials.DarkRed} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Carpet_Round.glb')
