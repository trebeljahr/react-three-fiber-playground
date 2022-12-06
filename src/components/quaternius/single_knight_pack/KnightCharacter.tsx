/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Knight_1: THREE.SkinnedMesh
    Knight_2: THREE.SkinnedMesh
    Knight_3: THREE.SkinnedMesh
    Bone: THREE.Bone
  }
  materials: {
    Armor: THREE.MeshStandardMaterial
    Boots: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
  }
}

type ActionName = 'HumanArmature|Death' | 'HumanArmature|Idle' | 'HumanArmature|Idle_swordLeft' | 'HumanArmature|Idle_swordRight' | 'HumanArmature|Jump' | 'HumanArmature|Roll' | 'HumanArmature|Roll_sword' | 'HumanArmature|Run' | 'HumanArmature|Run_swordAttack' | 'HumanArmature|Run_swordRight' | 'HumanArmature|swordAttackJump' | 'HumanArmature|Walking'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/KnightCharacter.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="HumanArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Bone} />
          </group>
          <group name="Knight" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Knight_1" geometry={nodes.Knight_1.geometry} material={materials.Armor} skeleton={nodes.Knight_1.skeleton} />
            <skinnedMesh name="Knight_2" geometry={nodes.Knight_2.geometry} material={materials.Boots} skeleton={nodes.Knight_2.skeleton} />
            <skinnedMesh name="Knight_3" geometry={nodes.Knight_3.geometry} material={materials.Skin} skeleton={nodes.Knight_3.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/KnightCharacter.glb')