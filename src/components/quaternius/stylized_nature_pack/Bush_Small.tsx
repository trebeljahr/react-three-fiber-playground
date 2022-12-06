/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Bush_Small: THREE.Mesh
  }
  materials: {
    Bush_Leaves: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Bush_Small.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Bush_Small.geometry} material={materials.Bush_Leaves} rotation={[2.81, -0.5, -2.89]} scale={100} />
    </group>
  )
}

useGLTF.preload('/Bush_Small.glb')
