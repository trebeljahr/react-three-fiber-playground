/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Lever_2: THREE.SkinnedMesh
    Lever_3: THREE.SkinnedMesh
    Lever_4: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    DarkMetal: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Lever: THREE.MeshStandardMaterial
  }
}

type ActionName = 'Lever_Off' | 'Lever_On' | 'LeverArmature|Lever_Off' | 'LeverArmature|Lever_On'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Lever.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="LeverArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Lever_1" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Lever_2" geometry={nodes.Lever_2.geometry} material={materials.DarkMetal} skeleton={nodes.Lever_2.skeleton} />
            <skinnedMesh name="Lever_3" geometry={nodes.Lever_3.geometry} material={materials.Metal} skeleton={nodes.Lever_3.skeleton} />
            <skinnedMesh name="Lever_4" geometry={nodes.Lever_4.geometry} material={materials.Lever} skeleton={nodes.Lever_4.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Lever.glb')
