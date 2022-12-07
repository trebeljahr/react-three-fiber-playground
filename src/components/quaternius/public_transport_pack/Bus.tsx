/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    BackWheels_Cylinder007: THREE.Mesh
    ['Bus_Cube001-Mesh']: THREE.Mesh
    ['Bus_Cube001-Mesh_1']: THREE.Mesh
    ['Bus_Cube001-Mesh_2']: THREE.Mesh
    ['Bus_Cube001-Mesh_3']: THREE.Mesh
    ['Bus_Cube001-Mesh_4']: THREE.Mesh
    ['Bus_Cube001-Mesh_5']: THREE.Mesh
    FrontWheels_Cylinder006: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    Bottom: THREE.MeshStandardMaterial
    Windows: THREE.MeshStandardMaterial
    Details: THREE.MeshStandardMaterial
    Bumper: THREE.MeshStandardMaterial
    Lights: THREE.MeshStandardMaterial
    Top: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/public_transport_pack/Bus.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.BackWheels_Cylinder007.geometry} material={materials.Material} />
      <mesh geometry={nodes['Bus_Cube001-Mesh'].geometry} material={materials.Bottom} />
      <mesh geometry={nodes['Bus_Cube001-Mesh_1'].geometry} material={materials.Windows} />
      <mesh geometry={nodes['Bus_Cube001-Mesh_2'].geometry} material={materials.Details} />
      <mesh geometry={nodes['Bus_Cube001-Mesh_3'].geometry} material={materials.Bumper} />
      <mesh geometry={nodes['Bus_Cube001-Mesh_4'].geometry} material={materials.Lights} />
      <mesh geometry={nodes['Bus_Cube001-Mesh_5'].geometry} material={materials.Top} />
      <mesh geometry={nodes.FrontWheels_Cylinder006.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/glb/public_transport_pack/Bus.glb')
