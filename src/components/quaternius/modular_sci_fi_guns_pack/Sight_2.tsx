/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sight_2_1: THREE.Mesh
    Sight_2_2: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi_guns_pack/Sight_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Sight_2_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Sight_2_2.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi_guns_pack/Sight_2.glb')
