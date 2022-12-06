/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    MantaRay_1: THREE.SkinnedMesh
    MantaRay_2: THREE.SkinnedMesh
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
  const { nodes, materials, animations } = useGLTF('/Manta ray.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="MantaRay" position={[0, 0, 0.8]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="MantaRay_1" geometry={nodes.MantaRay_1.geometry} material={materials.Bottom} skeleton={nodes.MantaRay_1.skeleton} />
            <skinnedMesh name="MantaRay_2" geometry={nodes.MantaRay_2.geometry} material={materials.Top} skeleton={nodes.MantaRay_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Manta ray.glb')
