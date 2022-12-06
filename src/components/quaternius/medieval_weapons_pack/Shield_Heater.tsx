/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Shield_Heater_1: THREE.Mesh
    Shield_Heater_2: THREE.Mesh
    Shield_Heater_3: THREE.Mesh
    Shield_Heater_4: THREE.Mesh
  }
  materials: {
    Steel: THREE.MeshStandardMaterial
    DarkWood: THREE.MeshStandardMaterial
    LightSteel: THREE.MeshStandardMaterial
    LightWood: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Shield_Heater.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Shield_Heater_1.geometry} material={materials.Steel} />
        <mesh geometry={nodes.Shield_Heater_2.geometry} material={materials.DarkWood} />
        <mesh geometry={nodes.Shield_Heater_3.geometry} material={materials.LightSteel} />
        <mesh geometry={nodes.Shield_Heater_4.geometry} material={materials.LightWood} />
      </group>
    </group>
  )
}

useGLTF.preload('/Shield_Heater.glb')
