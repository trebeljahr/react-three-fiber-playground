/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    TrafficSign_1: THREE.Mesh
    TrafficSign_2: THREE.Mesh
  }
  materials: {
    Border: THREE.MeshStandardMaterial
    Sign: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/TrafficSign1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0.02, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={3.25}>
        <mesh geometry={nodes.TrafficSign_1.geometry} material={materials.Border} />
        <mesh geometry={nodes.TrafficSign_2.geometry} material={materials.Sign} />
      </group>
    </group>
  )
}

useGLTF.preload('/TrafficSign1.glb')