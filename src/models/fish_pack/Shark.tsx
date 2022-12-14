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
    Shark_1: THREE.SkinnedMesh
    Shark_2: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Bottom: THREE.MeshStandardMaterial
    Top: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'Armature|Swim'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/fish_pack/Shark.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Armature' position={[0, 0, 0.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='Shark' position={[0, 0.33, 0.37]} rotation={[-Math.PI / 2, 0, 0]} scale={159.42}>
            <skinnedMesh
              name='Shark_1'
              geometry={nodes.Shark_1.geometry}
              material={materials.Bottom}
              skeleton={nodes.Shark_1.skeleton}
            />
            <skinnedMesh
              name='Shark_2'
              geometry={nodes.Shark_2.geometry}
              material={materials.Top}
              skeleton={nodes.Shark_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/fish_pack/Shark.glb')
