/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAnimationsWithCleanup } from '@/hooks/useAnimationsWithCleanup'
import { GenericAnimationController } from '@/components/canvas/GenericAnimationController'
import { GLTF } from 'three-stdlib'
import { DoubleSide } from 'three'

type GLTFResult = GLTF & {
  nodes: {
    RedSnapper_1: THREE.SkinnedMesh
    RedSnapper_2: THREE.SkinnedMesh
    RedSnapper_3: THREE.SkinnedMesh
    RedSnapper_4: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    RedSnapper_Fins: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
    RedSnapper_Main: THREE.MeshStandardMaterial
    RedSnapper_Light: THREE.MeshStandardMaterial
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
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/RedSnapper.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)

  useLayoutEffect(() => {
    Object.keys(materials).forEach((key) => {
      Object.assign(materials[key], { side: DoubleSide })
    })
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Fish_Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name='RedSnapper' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='RedSnapper_1'
              geometry={nodes.RedSnapper_1.geometry}
              material={materials.RedSnapper_Fins}
              skeleton={nodes.RedSnapper_1.skeleton}
            />
            <skinnedMesh
              name='RedSnapper_2'
              geometry={nodes.RedSnapper_2.geometry}
              material={materials.Eyes}
              skeleton={nodes.RedSnapper_2.skeleton}
            />
            <skinnedMesh
              name='RedSnapper_3'
              geometry={nodes.RedSnapper_3.geometry}
              material={materials.RedSnapper_Main}
              skeleton={nodes.RedSnapper_3.skeleton}
            />
            <skinnedMesh
              name='RedSnapper_4'
              geometry={nodes.RedSnapper_4.geometry}
              material={materials.RedSnapper_Light}
              skeleton={nodes.RedSnapper_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/RedSnapper.glb')
