/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bell_Tower_1: THREE.Mesh
    Bell_Tower_2: THREE.Mesh
    Bell_Tower_3: THREE.Mesh
    Bell_Tower_4: THREE.Mesh
    Bell_Tower_5: THREE.Mesh
    Bell_Tower_6: THREE.Mesh
    Bell_Tower_7: THREE.Mesh
    Bell_Tower_8: THREE.Mesh
    Bell_Tower_9: THREE.Mesh
    Bell_Tower_10: THREE.Mesh
  }
  materials: {
    Stone_Light: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Wood_Side: THREE.MeshStandardMaterial
    Bell: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
    RoofTiles: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/Bell_Tower.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bell_Tower_1.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Bell_Tower_2.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.Bell_Tower_3.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Bell_Tower_4.geometry} material={materials.Wood_Side} />
        <mesh geometry={nodes.Bell_Tower_5.geometry} material={materials.Bell} />
        <mesh geometry={nodes.Bell_Tower_6.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Bell_Tower_7.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Bell_Tower_8.geometry} material={materials.Windows} />
        <mesh geometry={nodes.Bell_Tower_9.geometry} material={materials.RoofTiles} />
        <mesh geometry={nodes.Bell_Tower_10.geometry} material={materials.Beige} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/Bell_Tower.glb')
