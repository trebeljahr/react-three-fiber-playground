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
    Fish2_1: THREE.SkinnedMesh
    Fish2_2: THREE.SkinnedMesh
    Fish2_3: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Body: THREE.MeshStandardMaterial
    Fins: THREE.MeshStandardMaterial
    Front: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'Armature|Swim.001'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/fish_pack/Fish2.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='Fish2' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Fish2_1'
              geometry={nodes.Fish2_1.geometry}
              material={materials.Body}
              skeleton={nodes.Fish2_1.skeleton}
            />
            <skinnedMesh
              name='Fish2_2'
              geometry={nodes.Fish2_2.geometry}
              material={materials.Fins}
              skeleton={nodes.Fish2_2.skeleton}
            />
            <skinnedMesh
              name='Fish2_3'
              geometry={nodes.Fish2_3.geometry}
              material={materials.Front}
              skeleton={nodes.Fish2_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/fish_pack/Fish2.glb')
