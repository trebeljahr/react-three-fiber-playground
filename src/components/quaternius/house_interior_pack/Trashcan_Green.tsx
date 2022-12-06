/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Trashcan_Green_1: THREE.Mesh
    Trashcan_Green_2: THREE.Mesh
  }
  materials: {
    DarkGreen: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Trashcan_Green.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Trashcan_Green_1.geometry} material={materials.DarkGreen} />
        <mesh geometry={nodes.Trashcan_Green_2.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Trashcan_Green.glb')
