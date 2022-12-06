/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Skull_1: THREE.SkinnedMesh
    Skull_2: THREE.SkinnedMesh
    Body: THREE.Bone
    Head: THREE.Bone
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Main_Light: THREE.MeshStandardMaterial
  }
}

type ActionName = 'MonsterArmature|Bite_Front' | 'MonsterArmature|Bite_InPlace' | 'MonsterArmature|Dance' | 'MonsterArmature|Death' | 'MonsterArmature|HitRecieve' | 'MonsterArmature|Idle' | 'MonsterArmature|Jump' | 'MonsterArmature|No' | 'MonsterArmature|Walk' | 'MonsterArmature|Yes'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Skull.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="MonsterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.Head} />
          </group>
          <group name="Skull" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Skull_1" geometry={nodes.Skull_1.geometry} material={materials.Main} skeleton={nodes.Skull_1.skeleton} />
            <skinnedMesh name="Skull_2" geometry={nodes.Skull_2.geometry} material={materials.Main_Light} skeleton={nodes.Skull_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Skull.glb')