/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Watchtower_With_Roof_1: THREE.Mesh
    Watchtower_With_Roof_2: THREE.Mesh
  }
  materials: {
    LightWood: THREE.MeshStandardMaterial
    Celing: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/WatchTowerWRoof.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Watchtower_With_Roof_1.geometry} material={materials.LightWood} />
        <mesh geometry={nodes.Watchtower_With_Roof_2.geometry} material={materials.Celing} />
      </group>
    </group>
  )
}

useGLTF.preload('/WatchTowerWRoof.glb')