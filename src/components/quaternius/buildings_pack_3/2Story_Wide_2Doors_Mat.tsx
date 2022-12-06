/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['2Story_Wide_2Doors_Mat_1']: THREE.Mesh
    ['2Story_Wide_2Doors_Mat_2']: THREE.Mesh
    ['2Story_Wide_2Doors_Mat_3']: THREE.Mesh
    ['2Story_Wide_2Doors_Mat_4']: THREE.Mesh
    ['2Story_Wide_2Doors_Mat_5']: THREE.Mesh
    ['2Story_Wide_2Doors_Mat_6']: THREE.Mesh
    ['2Story_Wide_2Doors_Mat_7']: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Bricks: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
    Dark: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/2Story_Wide_2Doors_Mat.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes['2Story_Wide_2Doors_Mat_1'].geometry} material={materials.White} />
        <mesh geometry={nodes['2Story_Wide_2Doors_Mat_2'].geometry} material={materials.Black} />
        <mesh geometry={nodes['2Story_Wide_2Doors_Mat_3'].geometry} material={materials.Bricks} />
        <mesh geometry={nodes['2Story_Wide_2Doors_Mat_4'].geometry} material={materials.Windows} />
        <mesh geometry={nodes['2Story_Wide_2Doors_Mat_5'].geometry} material={materials.Glass} />
        <mesh geometry={nodes['2Story_Wide_2Doors_Mat_6'].geometry} material={materials.Dark} />
        <mesh geometry={nodes['2Story_Wide_2Doors_Mat_7'].geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/2Story_Wide_2Doors_Mat.glb')
