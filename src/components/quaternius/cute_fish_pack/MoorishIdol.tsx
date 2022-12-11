/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GenericAnimationController } from '@/components/canvas/GenericAnimationController'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    MoorishIdol_1: THREE.SkinnedMesh
    MoorishIdol_2: THREE.SkinnedMesh
    MoorishIdol_3: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    MoorishIdol_Main: THREE.MeshStandardMaterial
    MoorishIdol_Dark: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'Fish_Armature|Attack'
  | 'Fish_Armature|Death'
  | 'Fish_Armature|Out_Of_Water'
  | 'Fish_Armature|Swimming_Fast'
  | 'Fish_Armature|Swimming_Impulse'
  | 'Fish_Armature|Swimming_Normal'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/MoorishIdol.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Fish_Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name='MoorishIdol' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='MoorishIdol_1'
              geometry={nodes.MoorishIdol_1.geometry}
              material={materials.MoorishIdol_Main}
              skeleton={nodes.MoorishIdol_1.skeleton}
            />
            <skinnedMesh
              name='MoorishIdol_2'
              geometry={nodes.MoorishIdol_2.geometry}
              material={materials.MoorishIdol_Dark}
              skeleton={nodes.MoorishIdol_2.skeleton}
            />
            <skinnedMesh
              name='MoorishIdol_3'
              geometry={nodes.MoorishIdol_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.MoorishIdol_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/MoorishIdol.glb')