/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Pistol_3_1: THREE.Mesh
    Pistol_3_2: THREE.Mesh
    Pistol_3_3: THREE.Mesh
    Pistol_3_4: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi_guns_pack/Pistol_3.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Pistol_3_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.Pistol_3_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Pistol_3_3.geometry} material={materials.White} />
        <mesh geometry={nodes.Pistol_3_4.geometry} material={materials.Main} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi_guns_pack/Pistol_3.glb')
