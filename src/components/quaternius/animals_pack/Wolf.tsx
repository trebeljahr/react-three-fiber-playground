/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Wolf_1: THREE.SkinnedMesh
    Wolf_2: THREE.SkinnedMesh
    Wolf_3: THREE.SkinnedMesh
    Wolf_4: THREE.SkinnedMesh
    Body: THREE.Bone
    IKBackLegL: THREE.Bone
    IKFrontLegL: THREE.Bone
    IKBackLegR: THREE.Bone
    IKFrontLegR: THREE.Bone
  }
  materials: {
    Main: THREE.MeshStandardMaterial
    Main_Light: THREE.MeshStandardMaterial
    Eyes_Black: THREE.MeshStandardMaterial
    Nose: THREE.MeshStandardMaterial
  }
}

type ActionName =
  | 'AnimalArmature|Attack'
  | 'AnimalArmature|Death'
  | 'AnimalArmature|Eating'
  | 'AnimalArmature|Gallop'
  | 'AnimalArmature|Gallop_Jump'
  | 'AnimalArmature|Idle'
  | 'AnimalArmature|Idle_2'
  | 'AnimalArmature|Idle_2_HeadLow'
  | 'AnimalArmature|Idle_HitReact_Left'
  | 'AnimalArmature|Idle_HitReact_Right'
  | 'AnimalArmature|Jump_ToIdle'
  | 'AnimalArmature|Walk'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/animals_pack/Wolf.glb') as unknown as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='AnimalArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.IKBackLegL} />
            <primitive object={nodes.IKFrontLegL} />
            <primitive object={nodes.IKBackLegR} />
            <primitive object={nodes.IKFrontLegR} />
          </group>
          <group name='Wolf' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Wolf_1'
              geometry={nodes.Wolf_1.geometry}
              material={materials.Main}
              skeleton={nodes.Wolf_1.skeleton}
            />
            <skinnedMesh
              name='Wolf_2'
              geometry={nodes.Wolf_2.geometry}
              material={materials.Main_Light}
              skeleton={nodes.Wolf_2.skeleton}
            />
            <skinnedMesh
              name='Wolf_3'
              geometry={nodes.Wolf_3.geometry}
              material={materials.Eyes_Black}
              skeleton={nodes.Wolf_3.skeleton}
            />
            <skinnedMesh
              name='Wolf_4'
              geometry={nodes.Wolf_4.geometry}
              material={materials.Nose}
              skeleton={nodes.Wolf_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/animals_pack/Wolf.glb')
