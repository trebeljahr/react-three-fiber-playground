/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Adventurer_Body_1: THREE.SkinnedMesh
    Adventurer_Body_2: THREE.SkinnedMesh
    Adventurer_Body_3: THREE.SkinnedMesh
    Adventurer_Body_4: THREE.SkinnedMesh
    Adventurer_Body_5: THREE.SkinnedMesh
    Adventurer_Feet_1: THREE.SkinnedMesh
    Adventurer_Feet_2: THREE.SkinnedMesh
    Adventurer_Head_1: THREE.SkinnedMesh
    Adventurer_Head_2: THREE.SkinnedMesh
    Adventurer_Head_3: THREE.SkinnedMesh
    Adventurer_Legs_1: THREE.SkinnedMesh
    Adventurer_Legs_2: THREE.SkinnedMesh
    Adventurer_Legs_3: THREE.SkinnedMesh
    Adventurer_Legs_4: THREE.SkinnedMesh
    Adventurer_Legs_5: THREE.SkinnedMesh
    Adventurer_Legs_6: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Green: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Brown_02: THREE.MeshStandardMaterial
    Brown2: THREE.MeshStandardMaterial
    Hair_Brown: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_women/Adventurer.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <primitive object={nodes.Root} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Adventurer_Body_1.geometry}
          material={materials.Green}
          skeleton={nodes.Adventurer_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Body_2.geometry}
          material={materials.LightGreen}
          skeleton={nodes.Adventurer_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Body_3.geometry}
          material={materials.Gold}
          skeleton={nodes.Adventurer_Body_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Body_4.geometry}
          material={materials.Skin}
          skeleton={nodes.Adventurer_Body_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Body_5.geometry}
          material={materials.White}
          skeleton={nodes.Adventurer_Body_5.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Adventurer_Feet_1.geometry}
          material={materials.Brown_02}
          skeleton={nodes.Adventurer_Feet_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Feet_2.geometry}
          material={materials.Brown2}
          skeleton={nodes.Adventurer_Feet_2.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Adventurer_Head_1.geometry}
          material={materials.Skin}
          skeleton={nodes.Adventurer_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Head_2.geometry}
          material={materials.Hair_Brown}
          skeleton={nodes.Adventurer_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Head_3.geometry}
          material={materials.Brown}
          skeleton={nodes.Adventurer_Head_3.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Adventurer_Legs_1.geometry}
          material={materials.LightGreen}
          skeleton={nodes.Adventurer_Legs_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Legs_2.geometry}
          material={materials.Gold}
          skeleton={nodes.Adventurer_Legs_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Legs_3.geometry}
          material={materials.Skin}
          skeleton={nodes.Adventurer_Legs_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Legs_4.geometry}
          material={materials.White}
          skeleton={nodes.Adventurer_Legs_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Legs_5.geometry}
          material={materials.Brown_02}
          skeleton={nodes.Adventurer_Legs_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Adventurer_Legs_6.geometry}
          material={materials.Brown2}
          skeleton={nodes.Adventurer_Legs_6.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_women/Adventurer.glb')
