/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Magazine_SMG_2: THREE.Mesh
    SMG_2_1: THREE.Mesh
    SMG_2_2: THREE.Mesh
    SMG_2_3: THREE.Mesh
    SMG_2_4: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_sci_fi_guns_pack/SMG_2.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Magazine_SMG_2.geometry}
        material={materials.Black}
        position={[0.58, 0.15, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.SMG_2_1.geometry} material={materials.Black} />
        <mesh geometry={nodes.SMG_2_2.geometry} material={materials.White} />
        <mesh geometry={nodes.SMG_2_3.geometry} material={materials.Main} />
        <mesh geometry={nodes.SMG_2_4.geometry} material={materials.Grey} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_sci_fi_guns_pack/SMG_2.glb')
