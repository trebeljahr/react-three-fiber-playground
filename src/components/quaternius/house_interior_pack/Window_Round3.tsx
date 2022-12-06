/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Window_Round3_1: THREE.Mesh
    Window_Round3_2: THREE.Mesh
  }
  materials: {
    White: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/house_interior_pack/Window_Round3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Window_Round3_1.geometry} material={materials.White} />
        <mesh geometry={nodes.Window_Round3_2.geometry} material={materials.Glass} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/house_interior_pack/Window_Round3.glb')
