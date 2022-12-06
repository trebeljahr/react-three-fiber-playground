/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BearTrap_Closed: THREE.Mesh
  }
  materials: {
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/BearTrap_Closed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BearTrap_Closed.geometry} material={materials.Grey} rotation={[-Math.PI / 2, 0, 0]} scale={198.94} />
    </group>
  )
}

useGLTF.preload('/BearTrap_Closed.glb')
