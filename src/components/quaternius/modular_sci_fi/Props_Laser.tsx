/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Props_Laser_1: THREE.Mesh
    Props_Laser_2: THREE.Mesh
    Props_Laser_3: THREE.Mesh
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    DarkGrey: THREE.MeshStandardMaterial
    Accent: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Props_Laser.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Props_Laser_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Props_Laser_2.geometry} material={materials.DarkGrey} />
        <mesh geometry={nodes.Props_Laser_3.geometry} material={materials.Accent} />
      </group>
    </group>
  )
}

useGLTF.preload('/Props_Laser.glb')
