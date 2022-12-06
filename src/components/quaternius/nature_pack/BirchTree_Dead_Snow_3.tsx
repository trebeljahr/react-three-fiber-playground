/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BirchTree_Dead_Snow_3_1: THREE.Mesh
    BirchTree_Dead_Snow_3_2: THREE.Mesh
    BirchTree_Dead_Snow_3_3: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Snow: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/nature_pack/glb/nature_pack/BirchTree_Dead_Snow_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.BirchTree_Dead_Snow_3_1.geometry} material={materials.White} />
        <mesh geometry={nodes.BirchTree_Dead_Snow_3_2.geometry} material={materials.Black} />
        <mesh geometry={nodes.BirchTree_Dead_Snow_3_3.geometry} material={materials.Snow} />
      </group>
    </group>
  )
}
