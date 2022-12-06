/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mushroom_1_1: THREE.Mesh
    Mushroom_1_2: THREE.Mesh
  }
  materials: {
    Mushroom1: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/crops_pack/glb/crops_pack/Mushroom_1.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Mushroom_1_1.geometry} material={materials.Mushroom1} />
        <mesh geometry={nodes.Mushroom_1_2.geometry} material={materials.Red} />
      </group>
    </group>
  )
}
