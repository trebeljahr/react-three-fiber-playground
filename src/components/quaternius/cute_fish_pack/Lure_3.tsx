/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { DoubleSide } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Lure_3_1: THREE.Mesh
    Lure_3_2: THREE.Mesh
    Lure_3_3: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Lure_Grey: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/cute_fish_pack/Lure_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 1.49]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Lure_3_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Lure_3_2.geometry} material={materials.Lure_Grey} />
        <mesh geometry={nodes.Lure_3_3.geometry} material={materials.Metal} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/Lure_3.glb')
