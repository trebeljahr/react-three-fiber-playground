/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Swordfish_1: THREE.SkinnedMesh
    Swordfish_2: THREE.SkinnedMesh
    Swordfish_3: THREE.SkinnedMesh
    Swordfish_4: THREE.SkinnedMesh
    Main1: THREE.Bone
  }
  materials: {
    Swordfish_Light: THREE.MeshStandardMaterial
    Swordfish_Main: THREE.MeshStandardMaterial
    Swordfish_Dark: THREE.MeshStandardMaterial
    Eyes: THREE.MeshStandardMaterial
  },
  animations: GLTFAction[],
}

type ActionName = 'Fish_Armature|Attack' | 'Fish_Armature|Death' | 'Fish_Armature|Out_Of_Water' | 'Fish_Armature|Swimming_Fast' | 'Fish_Armature|Swimming_Impulse' | 'Fish_Armature|Swimming_Normal'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/glb/cute_fish_pack/Swordfish.glb') as unknown as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Fish_Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Main1} />
          </group>
          <group name="Swordfish" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Swordfish_1" geometry={nodes.Swordfish_1.geometry} material={materials.Swordfish_Light} skeleton={nodes.Swordfish_1.skeleton} />
            <skinnedMesh name="Swordfish_2" geometry={nodes.Swordfish_2.geometry} material={materials.Swordfish_Main} skeleton={nodes.Swordfish_2.skeleton} />
            <skinnedMesh name="Swordfish_3" geometry={nodes.Swordfish_3.geometry} material={materials.Swordfish_Dark} skeleton={nodes.Swordfish_3.skeleton} />
            <skinnedMesh name="Swordfish_4" geometry={nodes.Swordfish_4.geometry} material={materials.Eyes} skeleton={nodes.Swordfish_4.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glb/cute_fish_pack/Swordfish.glb')
