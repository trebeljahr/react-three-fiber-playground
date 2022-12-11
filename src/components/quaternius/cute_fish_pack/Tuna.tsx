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
    Tuna_1: THREE.SkinnedMesh
    Tuna_2: THREE.SkinnedMesh
    Tuna_3: THREE.SkinnedMesh
    Tuna_4: THREE.SkinnedMesh
    Tuna_5: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    Eyes: THREE.MeshStandardMaterial
    Tuna_Dark: THREE.MeshStandardMaterial
    Tuna_Main: THREE.MeshStandardMaterial
    Tuna_Top: THREE.MeshStandardMaterial
    Tuna_Fins: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/Tuna.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Fish_Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name='Tuna' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Tuna_1'
              geometry={nodes.Tuna_1.geometry}
              material={materials.Eyes}
              skeleton={nodes.Tuna_1.skeleton}
            />
            <skinnedMesh
              name='Tuna_2'
              geometry={nodes.Tuna_2.geometry}
              material={materials.Tuna_Dark}
              skeleton={nodes.Tuna_2.skeleton}
            />
            <skinnedMesh
              name='Tuna_3'
              geometry={nodes.Tuna_3.geometry}
              material={materials.Tuna_Main}
              skeleton={nodes.Tuna_3.skeleton}
            />
            <skinnedMesh
              name='Tuna_4'
              geometry={nodes.Tuna_4.geometry}
              material={materials.Tuna_Top}
              skeleton={nodes.Tuna_4.skeleton}
            />
            <skinnedMesh
              name='Tuna_5'
              geometry={nodes.Tuna_5.geometry}
              material={materials.Tuna_Fins}
              skeleton={nodes.Tuna_5.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/Tuna.glb')