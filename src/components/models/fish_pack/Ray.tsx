/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAnimationsWithCleanup } from '@hooks/useAnimationsWithCleanup'
import { GenericAnimationController } from '@components/canvas/GenericAnimationController'
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
  animations: GLTFAction[]
}

type ActionName = 'Armature|Swim'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/fish_pack/Manta_ray.glb') as unknown as GLTFResult
  const { actions } = useAnimationsWithCleanup(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='Armature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name='MantaRay' position={[0, 0, 0.8]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='MantaRay_1'
              geometry={nodes.MantaRay_1.geometry}
              material={materials.Bottom}
              skeleton={nodes.MantaRay_1.skeleton}
            />
            <skinnedMesh
              name='MantaRay_2'
              geometry={nodes.MantaRay_2.geometry}
              material={materials.Top}
              skeleton={nodes.MantaRay_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/fish_pack/Manta_ray.glb')
