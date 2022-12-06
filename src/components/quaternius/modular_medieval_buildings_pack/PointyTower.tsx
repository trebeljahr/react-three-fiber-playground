/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    PointyTower_1: THREE.Mesh
    PointyTower_2: THREE.Mesh
    PointyTower_3: THREE.Mesh
    PointyTower_4: THREE.Mesh
  }
  materials: {
    ['LightRock.001']: THREE.MeshStandardMaterial
    ['Black.001']: THREE.MeshStandardMaterial
    ['Celing.001']: THREE.MeshStandardMaterial
    ['DarkRock.001']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_medieval_buildings_pack/PointyTower.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.PointyTower_1.geometry} material={materials['LightRock.001']} />
        <mesh geometry={nodes.PointyTower_2.geometry} material={materials['Black.001']} />
        <mesh geometry={nodes.PointyTower_3.geometry} material={materials['Celing.001']} />
        <mesh geometry={nodes.PointyTower_4.geometry} material={materials['DarkRock.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_medieval_buildings_pack/PointyTower.glb')
