/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    House_3_1: THREE.Mesh
    House_3_2: THREE.Mesh
    House_3_3: THREE.Mesh
    House_3_4: THREE.Mesh
    House_3_5: THREE.Mesh
    House_3_6: THREE.Mesh
  }
  materials: {
    Stone_Dark: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Wood_Side: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/House_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.House_3_1.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.House_3_2.geometry} material={materials.Stone} />
        <mesh geometry={nodes.House_3_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.House_3_4.geometry} material={materials.Wood_Side} />
        <mesh geometry={nodes.House_3_5.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.House_3_6.geometry} material={materials.Stone_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/House_3.glb')
