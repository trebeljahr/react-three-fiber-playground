/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Flower_2_Clump: THREE.Mesh
  }
  materials: {
    ['default']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/stylized_nature_pack/Flower_2_Clump.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Flower_2_Clump.geometry} material={materials['default']} scale={0.75} />
    </group>
  )
}

useGLTF.preload('/glb/stylized_nature_pack/Flower_2_Clump.glb')
