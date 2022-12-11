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
    Bee_1: THREE.SkinnedMesh
    Bee_2: THREE.SkinnedMesh
    Bee_3: THREE.SkinnedMesh
    Bee_4: THREE.SkinnedMesh
    Bee_5: THREE.SkinnedMesh
    Bee_6: THREE.SkinnedMesh
    Body: THREE.Bone
    Head: THREE.Bone
  }
  materials: {
    Main_2: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
    Wings: THREE.MeshStandardMaterial
    Tongue: THREE.MeshStandardMaterial
    Teeth: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'MonsterArmature|Bite_Front'
  | 'MonsterArmature|Death'
  | 'MonsterArmature|Flying'
  | 'MonsterArmature|HitRecieve'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/platformer_game_pack/Bee.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <GenericAnimationController actions={actions} />
      <group name='Root_Scene'>
        <group name='RootNode'>
          <group name='MonsterArmature' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Body} />
            <primitive object={nodes.Head} />
          </group>
          <group name='Bee' rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name='Bee_1'
              geometry={nodes.Bee_1.geometry}
              material={materials.Main_2}
              skeleton={nodes.Bee_1.skeleton}
            />
            <skinnedMesh
              name='Bee_2'
              geometry={nodes.Bee_2.geometry}
              material={materials.Main}
              skeleton={nodes.Bee_2.skeleton}
            />
            <skinnedMesh
              name='Bee_3'
              geometry={nodes.Bee_3.geometry}
              material={materials.Eyes}
              skeleton={nodes.Bee_3.skeleton}
            />
            <skinnedMesh
              name='Bee_4'
              geometry={nodes.Bee_4.geometry}
              material={materials.Wings}
              skeleton={nodes.Bee_4.skeleton}
            />
            <skinnedMesh
              name='Bee_5'
              geometry={nodes.Bee_5.geometry}
              material={materials.Tongue}
              skeleton={nodes.Bee_5.skeleton}
            />
            <skinnedMesh
              name='Bee_6'
              geometry={nodes.Bee_6.geometry}
              material={materials.Teeth}
              skeleton={nodes.Bee_6.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/platformer_game_pack/Bee.glb')
