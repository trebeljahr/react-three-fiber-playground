/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder_1: THREE.SkinnedMesh
    Cylinder_2: THREE.SkinnedMesh
    root: THREE.Bone
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Armature|Apatosaurus_Attack' | 'Armature|Apatosaurus_Idle' | 'Armature|Apatosaurus_Jump' | 'Armature|Apatosaurus_Run' | 'Armature|Apatosaurus_Walk' | 'Armature|Stegosaurus_Death'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Apatosaurus.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={300}>
            <primitive object={nodes.root} />
          </group>
          <group name="Cylinder" position={[0, 1.86, 1.07]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials.Material} skeleton={nodes.Cylinder_1.skeleton} />
            <skinnedMesh name="Cylinder_2" geometry={nodes.Cylinder_2.geometry} material={materials.Brown} skeleton={nodes.Cylinder_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Apatosaurus.glb')
