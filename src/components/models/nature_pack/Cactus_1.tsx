/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cactus_1_1: THREE.Mesh
    Cactus_1_2: THREE.Mesh
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    LightOrange: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/Cactus_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cactus_1_1.geometry} material={materials.Green} />
        <mesh geometry={nodes.Cactus_1_2.geometry} material={materials.LightOrange} />
      </group>
    </group>
  )
}
