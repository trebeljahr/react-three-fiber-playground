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
    Fish_1: THREE.SkinnedMesh
    Fish_2: THREE.SkinnedMesh
    Fish_3: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Bottom: THREE.MeshStandardMaterial
    Top: THREE.MeshStandardMaterial
    Fins: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'Armature|Swim'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/fish_pack/Fish1.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='Fish' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Fish_1'
              geometry={nodes.Fish_1.geometry}
              material={materials.Bottom}
              skeleton={nodes.Fish_1.skeleton}
            />
            <skinnedMesh
              name='Fish_2'
              geometry={nodes.Fish_2.geometry}
              material={materials.Top}
              skeleton={nodes.Fish_2.skeleton}
            />
            <skinnedMesh
              name='Fish_3'
              geometry={nodes.Fish_3.geometry}
              material={materials.Fins}
              skeleton={nodes.Fish_3.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/fish_pack/Fish1.glb')