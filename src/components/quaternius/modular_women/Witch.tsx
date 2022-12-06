/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Witch_Body_1: THREE.SkinnedMesh
    Witch_Body_2: THREE.SkinnedMesh
    Witch_Body_3: THREE.SkinnedMesh
    Witch_Body_4: THREE.SkinnedMesh
    Witch_Feet: THREE.SkinnedMesh
    Witch_Head_1: THREE.SkinnedMesh
    Witch_Head_2: THREE.SkinnedMesh
    Witch_Head_3: THREE.SkinnedMesh
    Witch_Head_4: THREE.SkinnedMesh
    Witch_Head_5: THREE.SkinnedMesh
    Witch_Legs_1: THREE.SkinnedMesh
    Witch_Legs_2: THREE.SkinnedMesh
    Witch_Legs_3: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Purple: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    Brown2: THREE.MeshStandardMaterial
    Hair_Black: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/glb/modular_women/Witch.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <primitive object={nodes.Root} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Witch_Body_1.geometry}
          material={materials.Purple}
          skeleton={nodes.Witch_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Witch_Body_2.geometry}
          material={materials.Skin}
          skeleton={nodes.Witch_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Witch_Body_3.geometry}
          material={materials.Gold}
          skeleton={nodes.Witch_Body_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Witch_Body_4.geometry}
          material={materials.Brown2}
          skeleton={nodes.Witch_Body_4.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.Witch_Feet.geometry}
        material={materials.Brown2}
        skeleton={nodes.Witch_Feet.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Witch_Head_1.geometry}
          material={materials.Purple}
          skeleton={nodes.Witch_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Witch_Head_2.geometry}
          material={materials.Skin}
          skeleton={nodes.Witch_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Witch_Head_3.geometry}
          material={materials.Gold}
          skeleton={nodes.Witch_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Witch_Head_4.geometry}
          material={materials.Hair_Black}
          skeleton={nodes.Witch_Head_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Witch_Head_5.geometry}
          material={materials.Brown}
          skeleton={nodes.Witch_Head_5.skeleton}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Witch_Legs_1.geometry}
          material={materials.Purple}
          skeleton={nodes.Witch_Legs_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Witch_Legs_2.geometry}
          material={materials.Gold}
          skeleton={nodes.Witch_Legs_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Witch_Legs_3.geometry}
          material={materials.Brown}
          skeleton={nodes.Witch_Legs_3.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/glb/modular_women/Witch.glb')
