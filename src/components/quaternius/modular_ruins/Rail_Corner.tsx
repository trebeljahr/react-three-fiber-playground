/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Rail_Corner: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Rail_Corner.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Rail_Corner.geometry} material={materials.Main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}

useGLTF.preload('/Rail_Corner.glb')
