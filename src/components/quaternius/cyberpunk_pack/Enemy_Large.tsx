/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube005_1: THREE.SkinnedMesh
    Cube005_2: THREE.SkinnedMesh
    Cube005_3: THREE.SkinnedMesh
    Cube005_4: THREE.SkinnedMesh
    Sphere_1: THREE.SkinnedMesh
    Sphere_2: THREE.SkinnedMesh
    Sphere_3: THREE.SkinnedMesh
    Sphere_4: THREE.SkinnedMesh
    Sphere_5: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Edge: THREE.MeshStandardMaterial
    Main2: THREE.MeshStandardMaterial
    Dark: THREE.MeshStandardMaterial
    Main: THREE.MeshStandardMaterial
    Eye: THREE.MeshStandardMaterial
  }
}

type ActionName = 'CharacterArmature|Attack' | 'CharacterArmature|Attack.001' | 'CharacterArmature|Death' | 'CharacterArmature|Idle' | 'CharacterArmature|Jump' | 'CharacterArmature|Run' | 'CharacterArmature|Shoot' | 'CharacterArmature|Walk'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Enemy_Large.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Cube005" position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials.Edge} skeleton={nodes.Cube005_1.skeleton} />
            <skinnedMesh name="Cube005_2" geometry={nodes.Cube005_2.geometry} material={materials.Main2} skeleton={nodes.Cube005_2.skeleton} />
            <skinnedMesh name="Cube005_3" geometry={nodes.Cube005_3.geometry} material={materials.Dark} skeleton={nodes.Cube005_3.skeleton} />
            <skinnedMesh name="Cube005_4" geometry={nodes.Cube005_4.geometry} material={materials.Main} skeleton={nodes.Cube005_4.skeleton} />
          </group>
          <group name="Sphere" rotation={[-1.94, 0, 0]} scale={11.94}>
            <skinnedMesh name="Sphere_1" geometry={nodes.Sphere_1.geometry} material={materials.Edge} skeleton={nodes.Sphere_1.skeleton} />
            <skinnedMesh name="Sphere_2" geometry={nodes.Sphere_2.geometry} material={materials.Main2} skeleton={nodes.Sphere_2.skeleton} />
            <skinnedMesh name="Sphere_3" geometry={nodes.Sphere_3.geometry} material={materials.Dark} skeleton={nodes.Sphere_3.skeleton} />
            <skinnedMesh name="Sphere_4" geometry={nodes.Sphere_4.geometry} material={materials.Main} skeleton={nodes.Sphere_4.skeleton} />
            <skinnedMesh name="Sphere_5" geometry={nodes.Sphere_5.geometry} material={materials.Eye} skeleton={nodes.Sphere_5.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Enemy_Large.glb')
