/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube008: THREE.Mesh
    Cube008_1: THREE.Mesh
  }
  materials: {
    MapleTree_Bark: THREE.MeshStandardMaterial
    MapleTree_Leaves: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/stylized_nature_pack/MapleTree_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube008.geometry} material={materials.MapleTree_Bark} />
      <mesh geometry={nodes.Cube008_1.geometry} material={materials.MapleTree_Leaves} />
    </group>
  )
}

useGLTF.preload('/glb/stylized_nature_pack/MapleTree_3.glb')
