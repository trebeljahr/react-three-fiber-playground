/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Couch_Medium1_1: THREE.Mesh
    Couch_Medium1_2: THREE.Mesh
  }
  materials: {
    Couch_Blue: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Couch_Medium1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Couch_Medium1_1.geometry} material={materials.Couch_Blue} />
        <mesh geometry={nodes.Couch_Medium1_2.geometry} material={materials.Black} />
      </group>
    </group>
  )
}

useGLTF.preload('/Couch_Medium1.glb')
