/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Shark_1: THREE.SkinnedMesh
    Shark_2: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Bottom: THREE.MeshStandardMaterial
    Top: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Armature|Swim'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Shark.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Armature" position={[0, 0, 0.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Shark" position={[0, 0.33, 0.37]} rotation={[-Math.PI / 2, 0, 0]} scale={159.42}>
            <skinnedMesh name="Shark_1" geometry={nodes.Shark_1.geometry} material={materials.Bottom} skeleton={nodes.Shark_1.skeleton} />
            <skinnedMesh name="Shark_2" geometry={nodes.Shark_2.geometry} material={materials.Top} skeleton={nodes.Shark_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Shark.glb')