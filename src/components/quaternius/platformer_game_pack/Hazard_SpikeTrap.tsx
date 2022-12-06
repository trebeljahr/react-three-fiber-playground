/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Hazard_SpikeTrap_1: THREE.SkinnedMesh
    Hazard_SpikeTrap_2: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Red: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

type ActionName = 'SpikeTrap_Activate' | 'Hazard_SpikeTrap_Armature|SpikeTrap_Activate'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Hazard_SpikeTrap.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Hazard_SpikeTrap_Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Hazard_SpikeTrap" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Hazard_SpikeTrap_1" geometry={nodes.Hazard_SpikeTrap_1.geometry} material={materials.Red} skeleton={nodes.Hazard_SpikeTrap_1.skeleton} />
            <skinnedMesh name="Hazard_SpikeTrap_2" geometry={nodes.Hazard_SpikeTrap_2.geometry} material={materials.Grey} skeleton={nodes.Hazard_SpikeTrap_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Hazard_SpikeTrap.glb')
