/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BirchTree_Autumn_5_1: THREE.Mesh
    BirchTree_Autumn_5_2: THREE.Mesh
    BirchTree_Autumn_5_3: THREE.Mesh
    BirchTree_Autumn_5_4: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Orange: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/BirchTree_Autumn_5.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.BirchTree_Autumn_5_1.geometry} material={materials.White} />
        <mesh geometry={nodes.BirchTree_Autumn_5_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.BirchTree_Autumn_5_3.geometry} material={materials.Orange} />
        <mesh geometry={nodes.BirchTree_Autumn_5_4.geometry} material={materials.LightWood} />
      </group>
    </group>
  )
}