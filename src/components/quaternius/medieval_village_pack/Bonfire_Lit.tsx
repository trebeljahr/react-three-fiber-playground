/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bonfire_Lit_1: THREE.Mesh
    Bonfire_Lit_2: THREE.Mesh
    Bonfire_Lit_3: THREE.Mesh
    Bonfire_Lit_4: THREE.Mesh
    Bonfire_Lit_5: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    WoodSide: THREE.MeshStandardMaterial
    Stone_Dark: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
    Fire: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/medieval_village_pack/Bonfire_Lit.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Bonfire_Lit_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Bonfire_Lit_2.geometry} material={materials.WoodSide} />
        <mesh geometry={nodes.Bonfire_Lit_3.geometry} material={materials.Stone_Dark} />
        <mesh geometry={nodes.Bonfire_Lit_4.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Bonfire_Lit_5.geometry} material={materials.Fire} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/medieval_village_pack/Bonfire_Lit.glb')
