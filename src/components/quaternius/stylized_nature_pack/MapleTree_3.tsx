/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    MapleTree_3_1: THREE.Mesh
    MapleTree_3_2: THREE.Mesh
  }
  materials: {
    MapleTree_Bark: THREE.MeshStandardMaterial
    MapleTree_Leaves: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/MapleTree_3.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.MapleTree_3_1.geometry} material={materials.MapleTree_Bark} />
        <mesh geometry={nodes.MapleTree_3_2.geometry} material={materials.MapleTree_Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('/MapleTree_3.glb')
