/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Windmill_SecondAge_1: THREE.Mesh
    Windmill_SecondAge_2: THREE.Mesh
    Windmill_SecondAge_3: THREE.Mesh
    Windmill_SecondAge_4: THREE.Mesh
    Windmill_SecondAge_5: THREE.Mesh
    Windmill_SecondAge_6: THREE.Mesh
    Windmill_SecondAge_7: THREE.Mesh
  }
  materials: {
    Walls: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Stone: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Fabric: THREE.MeshStandardMaterial
    Stone_Light: THREE.MeshStandardMaterial
    Wood_Light: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/real_time_strategy_pack/glb/fantasy_real_time_strategy/Windmill_SecondAge.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Windmill_SecondAge_1.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Windmill_SecondAge_2.geometry} material={materials.Main} />
        <mesh geometry={nodes.Windmill_SecondAge_3.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Windmill_SecondAge_4.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Windmill_SecondAge_5.geometry} material={materials.Fabric} />
        <mesh geometry={nodes.Windmill_SecondAge_6.geometry} material={materials.Stone_Light} />
        <mesh geometry={nodes.Windmill_SecondAge_7.geometry} material={materials.Wood_Light} />
      </group>
    </group>
  )
}
