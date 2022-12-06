/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Light_Stand2_1: THREE.Mesh
    Light_Stand2_2: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    LightMetal: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Light_Stand2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Light_Stand2_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Light_Stand2_2.geometry} material={materials.LightMetal} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Light_Stand2.glb')
