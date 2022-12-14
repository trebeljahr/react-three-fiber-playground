/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAnimationsWithCleanup } from '@hooks/useAnimationsWithCleanup'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ClownFish_1: THREE.SkinnedMesh
    ClownFish_2: THREE.SkinnedMesh
    ClownFish_3: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Outline: THREE.MeshStandardMaterial
    Body: THREE.MeshStandardMaterial
    Stripes: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'Armature|Swim'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/fish_pack/Fish3.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='ClownFish' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='ClownFish_1'
              geometry={nodes.ClownFish_1.geometry}
              material={materials.Outline}
              skeleton={nodes.ClownFish_1.skeleton}
            />
            <skinnedMesh
              name='ClownFish_2'
              geometry={nodes.ClownFish_2.geometry}
              material={materials.Body}
              skeleton={nodes.ClownFish_2.skeleton}
            />
            <skinnedMesh
              name='ClownFish_3'
              geometry={nodes.ClownFish_3.geometry}
              material={materials.Stripes}
              skeleton={nodes.ClownFish_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/fish_pack/Fish3.glb')
