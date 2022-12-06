/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Flower_2: THREE.Mesh
  }
  materials: {
    Flowers: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Flower_2.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Flower_2.geometry} material={materials.Flowers} rotation={[-Math.PI / 2, 0, 0]} scale={75} />
    </group>
  )
}

useGLTF.preload('/Flower_2.glb')
