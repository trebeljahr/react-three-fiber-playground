/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    PalmTree_4_1: THREE.Mesh
    PalmTree_4_2: THREE.Mesh
  }
  materials: {
    PalmTree_Trunk: THREE.MeshStandardMaterial
    PalmTree_Leaves: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/stylized_nature_pack/PalmTree_4.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.PalmTree_4_1.geometry} material={materials.PalmTree_Trunk} />
        <mesh geometry={nodes.PalmTree_4_2.geometry} material={materials.PalmTree_Leaves} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/stylized_nature_pack/PalmTree_4.glb')
