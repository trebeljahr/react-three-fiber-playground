/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    WoodLog_1: THREE.Mesh
    WoodLog_2: THREE.Mesh
    WoodLog_3: THREE.Mesh
  }
  materials: {
    Wood: THREE.MeshStandardMaterial
    Mushroom_Top: THREE.MeshStandardMaterial
    Mushroom_Bottom: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/glb/nature_pack/WoodLog.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.WoodLog_1.geometry} material={materials.Wood} />
        <mesh geometry={nodes.WoodLog_2.geometry} material={materials.Mushroom_Top} />
        <mesh geometry={nodes.WoodLog_3.geometry} material={materials.Mushroom_Bottom} />
      </group>
    </group>
  )
}
