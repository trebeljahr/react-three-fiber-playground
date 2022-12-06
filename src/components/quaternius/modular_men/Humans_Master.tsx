/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Swat_Legs_1: THREE.SkinnedMesh
    Swat_Legs_2: THREE.SkinnedMesh
    Adventurer_Feet_1: THREE.SkinnedMesh
    Adventurer_Feet_2: THREE.SkinnedMesh
    Adventurer_Legs_1: THREE.SkinnedMesh
    Adventurer_Legs_2: THREE.SkinnedMesh
    Adventurer_Body_1: THREE.SkinnedMesh
    Adventurer_Body_2: THREE.SkinnedMesh
    Adventurer_Body_3: THREE.SkinnedMesh
    Adventurer_Head_1: THREE.SkinnedMesh
    Adventurer_Head_2: THREE.SkinnedMesh
    Adventurer_Head_3: THREE.SkinnedMesh
    Adventurer_Head_4: THREE.SkinnedMesh
    Swat_Feet: THREE.SkinnedMesh
    Swat_Body_1: THREE.SkinnedMesh
    Swat_Body_2: THREE.SkinnedMesh
    Swat_Body_3: THREE.SkinnedMesh
    Swat_Head_1: THREE.SkinnedMesh
    Swat_Head_2: THREE.SkinnedMesh
    Swat_Head_3: THREE.SkinnedMesh
    Horse_Head_1: THREE.SkinnedMesh
    Horse_Head_2: THREE.SkinnedMesh
    Horse_Head_3: THREE.SkinnedMesh
    Horse_Head_4: THREE.SkinnedMesh
    Horse_Head_5: THREE.SkinnedMesh
    Horse_Head_6: THREE.SkinnedMesh
    Farmer_Feet_1: THREE.SkinnedMesh
    Farmer_Feet_2: THREE.SkinnedMesh
    Farmer_Pants: THREE.SkinnedMesh
    Farmer_Body_1: THREE.SkinnedMesh
    Farmer_Body_2: THREE.SkinnedMesh
    Farmer_Body_3: THREE.SkinnedMesh
    Farmer_Body_4: THREE.SkinnedMesh
    Farmer_Head_1: THREE.SkinnedMesh
    Farmer_Head_2: THREE.SkinnedMesh
    Farmer_Head_3: THREE.SkinnedMesh
    Farmer_Head_4: THREE.SkinnedMesh
    Farmer_Head_5: THREE.SkinnedMesh
    Worker_Feet_1: THREE.SkinnedMesh
    Worker_Feet_2: THREE.SkinnedMesh
    Worker_Legs_1: THREE.SkinnedMesh
    Worker_Legs_2: THREE.SkinnedMesh
    Worker_Body_1: THREE.SkinnedMesh
    Worker_Body_2: THREE.SkinnedMesh
    Worker_Body_3: THREE.SkinnedMesh
    Worker_Body_4: THREE.SkinnedMesh
    Worker_Head_1: THREE.SkinnedMesh
    Worker_Head_2: THREE.SkinnedMesh
    Worker_Head_3: THREE.SkinnedMesh
    Worker_Head_4: THREE.SkinnedMesh
    Worker_Head_5: THREE.SkinnedMesh
    Punk_Feet_1: THREE.SkinnedMesh
    Punk_Feet_2: THREE.SkinnedMesh
    Punk_Legs_1: THREE.SkinnedMesh
    Punk_Legs_2: THREE.SkinnedMesh
    Punk_Body_1: THREE.SkinnedMesh
    Punk_Body_2: THREE.SkinnedMesh
    Punk_Body_3: THREE.SkinnedMesh
    Punk_Head_1: THREE.SkinnedMesh
    Punk_Head_2: THREE.SkinnedMesh
    Punk_Head_3: THREE.SkinnedMesh
    Punk_Head_4: THREE.SkinnedMesh
    Punk_Head_5: THREE.SkinnedMesh
    Punk_Head_6: THREE.SkinnedMesh
    SpaceSuit_Feet_1: THREE.SkinnedMesh
    SpaceSuit_Feet_2: THREE.SkinnedMesh
    SpaceSuit_Legs_1: THREE.SkinnedMesh
    SpaceSuit_Legs_2: THREE.SkinnedMesh
    SpaceSuit_Legs_3: THREE.SkinnedMesh
    SpaceSuit_Legs_4: THREE.SkinnedMesh
    SpaceSuit_Body_1: THREE.SkinnedMesh
    SpaceSuit_Body_2: THREE.SkinnedMesh
    SpaceSuit_Body_3: THREE.SkinnedMesh
    SpaceSuit_Body_4: THREE.SkinnedMesh
    SpaceSuit_Head_1: THREE.SkinnedMesh
    SpaceSuit_Head_2: THREE.SkinnedMesh
    SpaceSuit_Head_3: THREE.SkinnedMesh
    King_Feet: THREE.SkinnedMesh
    King_Legs_1: THREE.SkinnedMesh
    King_Legs_2: THREE.SkinnedMesh
    King_Legs_3: THREE.SkinnedMesh
    King_Body_1: THREE.SkinnedMesh
    King_Body_2: THREE.SkinnedMesh
    King_Body_3: THREE.SkinnedMesh
    King_Body_4: THREE.SkinnedMesh
    King_Body_5: THREE.SkinnedMesh
    King_Head_1: THREE.SkinnedMesh
    King_Head_2: THREE.SkinnedMesh
    King_Head_3: THREE.SkinnedMesh
    King_Head_4: THREE.SkinnedMesh
    Beach_Feet_1: THREE.SkinnedMesh
    Beach_Feet_2: THREE.SkinnedMesh
    Beach_Legs_1: THREE.SkinnedMesh
    Beach_Legs_2: THREE.SkinnedMesh
    Beach_Legs_3: THREE.SkinnedMesh
    Beach_Body_1: THREE.SkinnedMesh
    Beach_Body_2: THREE.SkinnedMesh
    Beach_Head_1: THREE.SkinnedMesh
    Beach_Head_2: THREE.SkinnedMesh
    Beach_Head_3: THREE.SkinnedMesh
    Beach_Head_4: THREE.SkinnedMesh
    Beach_Head_5: THREE.SkinnedMesh
    Casual2_Feet_1: THREE.SkinnedMesh
    Casual2_Feet_2: THREE.SkinnedMesh
    Casual2_Body_1: THREE.SkinnedMesh
    Casual2_Body_2: THREE.SkinnedMesh
    Casual2_Head_1: THREE.SkinnedMesh
    Casual2_Head_2: THREE.SkinnedMesh
    Casual2_Head_3: THREE.SkinnedMesh
    Casual2_Head_4: THREE.SkinnedMesh
    Casual2_Head_5: THREE.SkinnedMesh
    Casual_Feet_1: THREE.SkinnedMesh
    Casual_Feet_2: THREE.SkinnedMesh
    Casual_Legs_1: THREE.SkinnedMesh
    Casual_Legs_2: THREE.SkinnedMesh
    Casual_Head_1: THREE.SkinnedMesh
    Casual_Head_2: THREE.SkinnedMesh
    Casual_Head_3: THREE.SkinnedMesh
    Casual_Head_4: THREE.SkinnedMesh
    Casual2_Legs: THREE.SkinnedMesh
    Casual_Body_1: THREE.SkinnedMesh
    Casual_Body_2: THREE.SkinnedMesh
    Suit_Legs: THREE.SkinnedMesh
    Suit_Feet: THREE.SkinnedMesh
    Suit_Body_1: THREE.SkinnedMesh
    Suit_Body_2: THREE.SkinnedMesh
    Suit_Body_3: THREE.SkinnedMesh
    Suit_Body_4: THREE.SkinnedMesh
    Suit_Head_1: THREE.SkinnedMesh
    Suit_Head_2: THREE.SkinnedMesh
    Suit_Head_3: THREE.SkinnedMesh
    Suit_Head_4: THREE.SkinnedMesh
    Backpack_1: THREE.SkinnedMesh
    Backpack_2: THREE.SkinnedMesh
    Backpack_3: THREE.SkinnedMesh
    Backpack_4: THREE.SkinnedMesh
    Sword_1: THREE.SkinnedMesh
    Sword_2: THREE.SkinnedMesh
    Sword_3: THREE.SkinnedMesh
    Pistol_1: THREE.SkinnedMesh
    Pistol_2: THREE.SkinnedMesh
    Pistol_3: THREE.SkinnedMesh
    Root: THREE.Bone
  }
  materials: {
    Swat: THREE.MeshStandardMaterial
    Swat_Black: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
    Brown2: THREE.MeshStandardMaterial
    Brown: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
    Skin: THREE.MeshStandardMaterial
    Eyebrows: THREE.MeshStandardMaterial
    Eye: THREE.MeshStandardMaterial
    Hair: THREE.MeshStandardMaterial
    Visor: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    LightBlue: THREE.MeshStandardMaterial
    Beige: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
    Worker_Yellow: THREE.MeshStandardMaterial
    Worker_Vest: THREE.MeshStandardMaterial
    LightBrown: THREE.MeshStandardMaterial
    Moustache: THREE.MeshStandardMaterial
    Red_Dark: THREE.MeshStandardMaterial
    Earrings: THREE.MeshStandardMaterial
    SciFi_Light_Accent: THREE.MeshStandardMaterial
    SciFi_Light: THREE.MeshStandardMaterial
    SciFi_MainDark: THREE.MeshStandardMaterial
    SciFi_Main: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    DarkBrown: THREE.MeshStandardMaterial
    Metal_Dark: THREE.MeshStandardMaterial
    Blue: THREE.MeshStandardMaterial
    Hair_White: THREE.MeshStandardMaterial
    Gold: THREE.MeshStandardMaterial
    Skin_Darker: THREE.MeshStandardMaterial
    Purple: THREE.MeshStandardMaterial
    LightBlue: THREE.MeshStandardMaterial
    Suit: THREE.MeshStandardMaterial
    Suit: THREE.MeshStandardMaterial
    Tie: THREE.MeshStandardMaterial
  }
}

type ActionName = 'CharacterArmature|Death' | 'CharacterArmature|Gun_Shoot' | 'CharacterArmature|HitRecieve' | 'CharacterArmature|HitRecieve_2' | 'CharacterArmature|Idle' | 'CharacterArmature|Idle_Gun' | 'CharacterArmature|Idle_Gun_Pointing' | 'CharacterArmature|Idle_Gun_Shoot' | 'CharacterArmature|Idle_Neutral' | 'CharacterArmature|Idle_Sword' | 'CharacterArmature|Interact' | 'CharacterArmature|Kick_Left' | 'CharacterArmature|Kick_Right' | 'CharacterArmature|Punch_Left' | 'CharacterArmature|Punch_Right' | 'CharacterArmature|Roll' | 'CharacterArmature|Run' | 'CharacterArmature|Run_Back' | 'CharacterArmature|Run_Left' | 'CharacterArmature|Run_Right' | 'CharacterArmature|Run_Shoot' | 'CharacterArmature|Sword_Slash' | 'CharacterArmature|Walk' | 'CharacterArmature|Wave'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/Humans_Master.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Swat_Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Swat_Legs_1" geometry={nodes.Swat_Legs_1.geometry} material={materials.Swat} skeleton={nodes.Swat_Legs_1.skeleton} />
            <skinnedMesh name="Swat_Legs_2" geometry={nodes.Swat_Legs_2.geometry} material={materials.Swat_Black} skeleton={nodes.Swat_Legs_2.skeleton} />
          </group>
          <group name="Adventurer_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Adventurer_Feet_1" geometry={nodes.Adventurer_Feet_1.geometry} material={materials.Black} skeleton={nodes.Adventurer_Feet_1.skeleton} />
            <skinnedMesh name="Adventurer_Feet_2" geometry={nodes.Adventurer_Feet_2.geometry} material={materials.Grey} skeleton={nodes.Adventurer_Feet_2.skeleton} />
          </group>
          <group name="Adventurer_Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Adventurer_Legs_1" geometry={nodes.Adventurer_Legs_1.geometry} material={materials.Brown2} skeleton={nodes.Adventurer_Legs_1.skeleton} />
            <skinnedMesh name="Adventurer_Legs_2" geometry={nodes.Adventurer_Legs_2.geometry} material={materials.Brown} skeleton={nodes.Adventurer_Legs_2.skeleton} />
          </group>
          <group name="Adventurer_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Adventurer_Body_1" geometry={nodes.Adventurer_Body_1.geometry} material={materials.Green} skeleton={nodes.Adventurer_Body_1.skeleton} />
            <skinnedMesh name="Adventurer_Body_2" geometry={nodes.Adventurer_Body_2.geometry} material={materials.LightGreen} skeleton={nodes.Adventurer_Body_2.skeleton} />
            <skinnedMesh name="Adventurer_Body_3" geometry={nodes.Adventurer_Body_3.geometry} material={materials.Skin} skeleton={nodes.Adventurer_Body_3.skeleton} />
          </group>
          <group name="Adventurer_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Adventurer_Head_1" geometry={nodes.Adventurer_Head_1.geometry} material={materials.Skin} skeleton={nodes.Adventurer_Head_1.skeleton} />
            <skinnedMesh name="Adventurer_Head_2" geometry={nodes.Adventurer_Head_2.geometry} material={materials.Eyebrows} skeleton={nodes.Adventurer_Head_2.skeleton} />
            <skinnedMesh name="Adventurer_Head_3" geometry={nodes.Adventurer_Head_3.geometry} material={materials.Eye} skeleton={nodes.Adventurer_Head_3.skeleton} />
            <skinnedMesh name="Adventurer_Head_4" geometry={nodes.Adventurer_Head_4.geometry} material={materials.Hair} skeleton={nodes.Adventurer_Head_4.skeleton} />
          </group>
          <skinnedMesh name="Swat_Feet" geometry={nodes.Swat_Feet.geometry} material={materials.Swat_Black} skeleton={nodes.Swat_Feet.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <group name="Swat_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Swat_Body_1" geometry={nodes.Swat_Body_1.geometry} material={materials.Swat} skeleton={nodes.Swat_Body_1.skeleton} />
            <skinnedMesh name="Swat_Body_2" geometry={nodes.Swat_Body_2.geometry} material={materials.Swat_Black} skeleton={nodes.Swat_Body_2.skeleton} />
            <skinnedMesh name="Swat_Body_3" geometry={nodes.Swat_Body_3.geometry} material={materials.Skin} skeleton={nodes.Swat_Body_3.skeleton} />
          </group>
          <group name="Swat_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Swat_Head_1" geometry={nodes.Swat_Head_1.geometry} material={materials.Swat} skeleton={nodes.Swat_Head_1.skeleton} />
            <skinnedMesh name="Swat_Head_2" geometry={nodes.Swat_Head_2.geometry} material={materials.Swat_Black} skeleton={nodes.Swat_Head_2.skeleton} />
            <skinnedMesh name="Swat_Head_3" geometry={nodes.Swat_Head_3.geometry} material={materials.Visor} skeleton={nodes.Swat_Head_3.skeleton} />
          </group>
          <group name="Horse_Head" rotation={[-Math.PI / 2, 0, 0]} scale={35}>
            <skinnedMesh name="Horse_Head_1" geometry={nodes.Horse_Head_1.geometry} material={materials.Black} skeleton={nodes.Horse_Head_1.skeleton} />
            <skinnedMesh name="Horse_Head_2" geometry={nodes.Horse_Head_2.geometry} material={materials.Brown2} skeleton={nodes.Horse_Head_2.skeleton} />
            <skinnedMesh name="Horse_Head_3" geometry={nodes.Horse_Head_3.geometry} material={materials.Brown} skeleton={nodes.Horse_Head_3.skeleton} />
            <skinnedMesh name="Horse_Head_4" geometry={nodes.Horse_Head_4.geometry} material={materials.Eyebrows} skeleton={nodes.Horse_Head_4.skeleton} />
            <skinnedMesh name="Horse_Head_5" geometry={nodes.Horse_Head_5.geometry} material={materials.Eye} skeleton={nodes.Horse_Head_5.skeleton} />
            <skinnedMesh name="Horse_Head_6" geometry={nodes.Horse_Head_6.geometry} material={materials.White} skeleton={nodes.Horse_Head_6.skeleton} />
          </group>
          <group name="Farmer_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Farmer_Feet_1" geometry={nodes.Farmer_Feet_1.geometry} material={materials.Brown2} skeleton={nodes.Farmer_Feet_1.skeleton} />
            <skinnedMesh name="Farmer_Feet_2" geometry={nodes.Farmer_Feet_2.geometry} material={materials.Brown} skeleton={nodes.Farmer_Feet_2.skeleton} />
          </group>
          <skinnedMesh name="Farmer_Pants" geometry={nodes.Farmer_Pants.geometry} material={materials.LightBlue} skeleton={nodes.Farmer_Pants.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <group name="Farmer_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Farmer_Body_1" geometry={nodes.Farmer_Body_1.geometry} material={materials.Brown} skeleton={nodes.Farmer_Body_1.skeleton} />
            <skinnedMesh name="Farmer_Body_2" geometry={nodes.Farmer_Body_2.geometry} material={materials.Skin} skeleton={nodes.Farmer_Body_2.skeleton} />
            <skinnedMesh name="Farmer_Body_3" geometry={nodes.Farmer_Body_3.geometry} material={materials.LightBlue} skeleton={nodes.Farmer_Body_3.skeleton} />
            <skinnedMesh name="Farmer_Body_4" geometry={nodes.Farmer_Body_4.geometry} material={materials.Beige} skeleton={nodes.Farmer_Body_4.skeleton} />
          </group>
          <group name="Farmer_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Farmer_Head_1" geometry={nodes.Farmer_Head_1.geometry} material={materials.Skin} skeleton={nodes.Farmer_Head_1.skeleton} />
            <skinnedMesh name="Farmer_Head_2" geometry={nodes.Farmer_Head_2.geometry} material={materials.Eyebrows} skeleton={nodes.Farmer_Head_2.skeleton} />
            <skinnedMesh name="Farmer_Head_3" geometry={nodes.Farmer_Head_3.geometry} material={materials.Eye} skeleton={nodes.Farmer_Head_3.skeleton} />
            <skinnedMesh name="Farmer_Head_4" geometry={nodes.Farmer_Head_4.geometry} material={materials.Beige} skeleton={nodes.Farmer_Head_4.skeleton} />
            <skinnedMesh name="Farmer_Head_5" geometry={nodes.Farmer_Head_5.geometry} material={materials.Red} skeleton={nodes.Farmer_Head_5.skeleton} />
          </group>
          <group name="Worker_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Worker_Feet_1" geometry={nodes.Worker_Feet_1.geometry} material={materials.Black} skeleton={nodes.Worker_Feet_1.skeleton} />
            <skinnedMesh name="Worker_Feet_2" geometry={nodes.Worker_Feet_2.geometry} material={materials.Grey} skeleton={nodes.Worker_Feet_2.skeleton} />
          </group>
          <group name="Worker_Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Worker_Legs_1" geometry={nodes.Worker_Legs_1.geometry} material={materials.Brown2} skeleton={nodes.Worker_Legs_1.skeleton} />
            <skinnedMesh name="Worker_Legs_2" geometry={nodes.Worker_Legs_2.geometry} material={materials.Brown} skeleton={nodes.Worker_Legs_2.skeleton} />
          </group>
          <group name="Worker_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Worker_Body_1" geometry={nodes.Worker_Body_1.geometry} material={materials.Skin} skeleton={nodes.Worker_Body_1.skeleton} />
            <skinnedMesh name="Worker_Body_2" geometry={nodes.Worker_Body_2.geometry} material={materials.Worker_Yellow} skeleton={nodes.Worker_Body_2.skeleton} />
            <skinnedMesh name="Worker_Body_3" geometry={nodes.Worker_Body_3.geometry} material={materials.Worker_Vest} skeleton={nodes.Worker_Body_3.skeleton} />
            <skinnedMesh name="Worker_Body_4" geometry={nodes.Worker_Body_4.geometry} material={materials.LightBrown} skeleton={nodes.Worker_Body_4.skeleton} />
          </group>
          <group name="Worker_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Worker_Head_1" geometry={nodes.Worker_Head_1.geometry} material={materials.Skin} skeleton={nodes.Worker_Head_1.skeleton} />
            <skinnedMesh name="Worker_Head_2" geometry={nodes.Worker_Head_2.geometry} material={materials.Eyebrows} skeleton={nodes.Worker_Head_2.skeleton} />
            <skinnedMesh name="Worker_Head_3" geometry={nodes.Worker_Head_3.geometry} material={materials.Eye} skeleton={nodes.Worker_Head_3.skeleton} />
            <skinnedMesh name="Worker_Head_4" geometry={nodes.Worker_Head_4.geometry} material={materials.Worker_Yellow} skeleton={nodes.Worker_Head_4.skeleton} />
            <skinnedMesh name="Worker_Head_5" geometry={nodes.Worker_Head_5.geometry} material={materials.Moustache} skeleton={nodes.Worker_Head_5.skeleton} />
          </group>
          <group name="Punk_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Punk_Feet_1" geometry={nodes.Punk_Feet_1.geometry} material={materials.Black} skeleton={nodes.Punk_Feet_1.skeleton} />
            <skinnedMesh name="Punk_Feet_2" geometry={nodes.Punk_Feet_2.geometry} material={materials.Skin} skeleton={nodes.Punk_Feet_2.skeleton} />
          </group>
          <group name="Punk_Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Punk_Legs_1" geometry={nodes.Punk_Legs_1.geometry} material={materials.Skin} skeleton={nodes.Punk_Legs_1.skeleton} />
            <skinnedMesh name="Punk_Legs_2" geometry={nodes.Punk_Legs_2.geometry} material={materials.LightBlue} skeleton={nodes.Punk_Legs_2.skeleton} />
          </group>
          <group name="Punk_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Punk_Body_1" geometry={nodes.Punk_Body_1.geometry} material={materials.Black} skeleton={nodes.Punk_Body_1.skeleton} />
            <skinnedMesh name="Punk_Body_2" geometry={nodes.Punk_Body_2.geometry} material={materials.Skin} skeleton={nodes.Punk_Body_2.skeleton} />
            <skinnedMesh name="Punk_Body_3" geometry={nodes.Punk_Body_3.geometry} material={materials.White} skeleton={nodes.Punk_Body_3.skeleton} />
          </group>
          <group name="Punk_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Punk_Head_1" geometry={nodes.Punk_Head_1.geometry} material={materials.Skin} skeleton={nodes.Punk_Head_1.skeleton} />
            <skinnedMesh name="Punk_Head_2" geometry={nodes.Punk_Head_2.geometry} material={materials.Eyebrows} skeleton={nodes.Punk_Head_2.skeleton} />
            <skinnedMesh name="Punk_Head_3" geometry={nodes.Punk_Head_3.geometry} material={materials.Eye} skeleton={nodes.Punk_Head_3.skeleton} />
            <skinnedMesh name="Punk_Head_4" geometry={nodes.Punk_Head_4.geometry} material={materials.Red} skeleton={nodes.Punk_Head_4.skeleton} />
            <skinnedMesh name="Punk_Head_5" geometry={nodes.Punk_Head_5.geometry} material={materials.Red_Dark} skeleton={nodes.Punk_Head_5.skeleton} />
            <skinnedMesh name="Punk_Head_6" geometry={nodes.Punk_Head_6.geometry} material={materials.Earrings} skeleton={nodes.Punk_Head_6.skeleton} />
          </group>
          <group name="SpaceSuit_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="SpaceSuit_Feet_1" geometry={nodes.SpaceSuit_Feet_1.geometry} material={materials.SciFi_Light_Accent} skeleton={nodes.SpaceSuit_Feet_1.skeleton} />
            <skinnedMesh name="SpaceSuit_Feet_2" geometry={nodes.SpaceSuit_Feet_2.geometry} material={materials.SciFi_Light} skeleton={nodes.SpaceSuit_Feet_2.skeleton} />
          </group>
          <group name="SpaceSuit_Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="SpaceSuit_Legs_1" geometry={nodes.SpaceSuit_Legs_1.geometry} material={materials.SciFi_Light_Accent} skeleton={nodes.SpaceSuit_Legs_1.skeleton} />
            <skinnedMesh name="SpaceSuit_Legs_2" geometry={nodes.SpaceSuit_Legs_2.geometry} material={materials.SciFi_Light} skeleton={nodes.SpaceSuit_Legs_2.skeleton} />
            <skinnedMesh name="SpaceSuit_Legs_3" geometry={nodes.SpaceSuit_Legs_3.geometry} material={materials.SciFi_MainDark} skeleton={nodes.SpaceSuit_Legs_3.skeleton} />
            <skinnedMesh name="SpaceSuit_Legs_4" geometry={nodes.SpaceSuit_Legs_4.geometry} material={materials.SciFi_Main} skeleton={nodes.SpaceSuit_Legs_4.skeleton} />
          </group>
          <group name="SpaceSuit_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="SpaceSuit_Body_1" geometry={nodes.SpaceSuit_Body_1.geometry} material={materials.SciFi_Light_Accent} skeleton={nodes.SpaceSuit_Body_1.skeleton} />
            <skinnedMesh name="SpaceSuit_Body_2" geometry={nodes.SpaceSuit_Body_2.geometry} material={materials.SciFi_Light} skeleton={nodes.SpaceSuit_Body_2.skeleton} />
            <skinnedMesh name="SpaceSuit_Body_3" geometry={nodes.SpaceSuit_Body_3.geometry} material={materials.SciFi_MainDark} skeleton={nodes.SpaceSuit_Body_3.skeleton} />
            <skinnedMesh name="SpaceSuit_Body_4" geometry={nodes.SpaceSuit_Body_4.geometry} material={materials.SciFi_Main} skeleton={nodes.SpaceSuit_Body_4.skeleton} />
          </group>
          <group name="SpaceSuit_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="SpaceSuit_Head_1" geometry={nodes.SpaceSuit_Head_1.geometry} material={materials.Grey} skeleton={nodes.SpaceSuit_Head_1.skeleton} />
            <skinnedMesh name="SpaceSuit_Head_2" geometry={nodes.SpaceSuit_Head_2.geometry} material={materials.SciFi_Light_Accent} skeleton={nodes.SpaceSuit_Head_2.skeleton} />
            <skinnedMesh name="SpaceSuit_Head_3" geometry={nodes.SpaceSuit_Head_3.geometry} material={materials.SciFi_Light} skeleton={nodes.SpaceSuit_Head_3.skeleton} />
          </group>
          <skinnedMesh name="King_Feet" geometry={nodes.King_Feet.geometry} material={materials.Metal} skeleton={nodes.King_Feet.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <group name="King_Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="King_Legs_1" geometry={nodes.King_Legs_1.geometry} material={materials.Metal} skeleton={nodes.King_Legs_1.skeleton} />
            <skinnedMesh name="King_Legs_2" geometry={nodes.King_Legs_2.geometry} material={materials.DarkBrown} skeleton={nodes.King_Legs_2.skeleton} />
            <skinnedMesh name="King_Legs_3" geometry={nodes.King_Legs_3.geometry} material={materials.Metal_Dark} skeleton={nodes.King_Legs_3.skeleton} />
          </group>
          <group name="King_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="King_Body_1" geometry={nodes.King_Body_1.geometry} material={materials.Skin} skeleton={nodes.King_Body_1.skeleton} />
            <skinnedMesh name="King_Body_2" geometry={nodes.King_Body_2.geometry} material={materials.Beige} skeleton={nodes.King_Body_2.skeleton} />
            <skinnedMesh name="King_Body_3" geometry={nodes.King_Body_3.geometry} material={materials.Metal} skeleton={nodes.King_Body_3.skeleton} />
            <skinnedMesh name="King_Body_4" geometry={nodes.King_Body_4.geometry} material={materials.Metal_Dark} skeleton={nodes.King_Body_4.skeleton} />
            <skinnedMesh name="King_Body_5" geometry={nodes.King_Body_5.geometry} material={materials.Blue} skeleton={nodes.King_Body_5.skeleton} />
          </group>
          <group name="King_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="King_Head_1" geometry={nodes.King_Head_1.geometry} material={materials.Skin} skeleton={nodes.King_Head_1.skeleton} />
            <skinnedMesh name="King_Head_2" geometry={nodes.King_Head_2.geometry} material={materials.Eye} skeleton={nodes.King_Head_2.skeleton} />
            <skinnedMesh name="King_Head_3" geometry={nodes.King_Head_3.geometry} material={materials.Hair_White} skeleton={nodes.King_Head_3.skeleton} />
            <skinnedMesh name="King_Head_4" geometry={nodes.King_Head_4.geometry} material={materials.Gold} skeleton={nodes.King_Head_4.skeleton} />
          </group>
          <group name="Beach_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Beach_Feet_1" geometry={nodes.Beach_Feet_1.geometry} material={materials.Skin} skeleton={nodes.Beach_Feet_1.skeleton} />
            <skinnedMesh name="Beach_Feet_2" geometry={nodes.Beach_Feet_2.geometry} material={materials.Red_Dark} skeleton={nodes.Beach_Feet_2.skeleton} />
          </group>
          <group name="Beach_Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Beach_Legs_1" geometry={nodes.Beach_Legs_1.geometry} material={materials.Skin} skeleton={nodes.Beach_Legs_1.skeleton} />
            <skinnedMesh name="Beach_Legs_2" geometry={nodes.Beach_Legs_2.geometry} material={materials.White} skeleton={nodes.Beach_Legs_2.skeleton} />
            <skinnedMesh name="Beach_Legs_3" geometry={nodes.Beach_Legs_3.geometry} material={materials.Red_Dark} skeleton={nodes.Beach_Legs_3.skeleton} />
          </group>
          <group name="Beach_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Beach_Body_1" geometry={nodes.Beach_Body_1.geometry} material={materials.Skin} skeleton={nodes.Beach_Body_1.skeleton} />
            <skinnedMesh name="Beach_Body_2" geometry={nodes.Beach_Body_2.geometry} material={materials.LightBrown} skeleton={nodes.Beach_Body_2.skeleton} />
          </group>
          <group name="Beach_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Beach_Head_1" geometry={nodes.Beach_Head_1.geometry} material={materials.Skin} skeleton={nodes.Beach_Head_1.skeleton} />
            <skinnedMesh name="Beach_Head_2" geometry={nodes.Beach_Head_2.geometry} material={materials.Eyebrows} skeleton={nodes.Beach_Head_2.skeleton} />
            <skinnedMesh name="Beach_Head_3" geometry={nodes.Beach_Head_3.geometry} material={materials.Eye} skeleton={nodes.Beach_Head_3.skeleton} />
            <skinnedMesh name="Beach_Head_4" geometry={nodes.Beach_Head_4.geometry} material={materials.Hair} skeleton={nodes.Beach_Head_4.skeleton} />
            <skinnedMesh name="Beach_Head_5" geometry={nodes.Beach_Head_5.geometry} material={materials.Earrings} skeleton={nodes.Beach_Head_5.skeleton} />
          </group>
          <group name="Casual2_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual2_Feet_1" geometry={nodes.Casual2_Feet_1.geometry} material={materials.White} skeleton={nodes.Casual2_Feet_1.skeleton} />
            <skinnedMesh name="Casual2_Feet_2" geometry={nodes.Casual2_Feet_2.geometry} material={materials.Red_Dark} skeleton={nodes.Casual2_Feet_2.skeleton} />
          </group>
          <group name="Casual2_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual2_Body_1" geometry={nodes.Casual2_Body_1.geometry} material={materials.Skin} skeleton={nodes.Casual2_Body_1.skeleton} />
            <skinnedMesh name="Casual2_Body_2" geometry={nodes.Casual2_Body_2.geometry} material={materials.LightBrown} skeleton={nodes.Casual2_Body_2.skeleton} />
          </group>
          <group name="Casual2_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual2_Head_1" geometry={nodes.Casual2_Head_1.geometry} material={materials.Skin} skeleton={nodes.Casual2_Head_1.skeleton} />
            <skinnedMesh name="Casual2_Head_2" geometry={nodes.Casual2_Head_2.geometry} material={materials.Eyebrows} skeleton={nodes.Casual2_Head_2.skeleton} />
            <skinnedMesh name="Casual2_Head_3" geometry={nodes.Casual2_Head_3.geometry} material={materials.Eye} skeleton={nodes.Casual2_Head_3.skeleton} />
            <skinnedMesh name="Casual2_Head_4" geometry={nodes.Casual2_Head_4.geometry} material={materials.Hair} skeleton={nodes.Casual2_Head_4.skeleton} />
            <skinnedMesh name="Casual2_Head_5" geometry={nodes.Casual2_Head_5.geometry} material={materials.Skin_Darker} skeleton={nodes.Casual2_Head_5.skeleton} />
          </group>
          <group name="Casual_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual_Feet_1" geometry={nodes.Casual_Feet_1.geometry} material={materials.White} skeleton={nodes.Casual_Feet_1.skeleton} />
            <skinnedMesh name="Casual_Feet_2" geometry={nodes.Casual_Feet_2.geometry} material={materials.Purple} skeleton={nodes.Casual_Feet_2.skeleton} />
          </group>
          <group name="Casual_Legs" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual_Legs_1" geometry={nodes.Casual_Legs_1.geometry} material={materials.Skin} skeleton={nodes.Casual_Legs_1.skeleton} />
            <skinnedMesh name="Casual_Legs_2" geometry={nodes.Casual_Legs_2.geometry} material={materials.LightBlue} skeleton={nodes.Casual_Legs_2.skeleton} />
          </group>
          <group name="Casual_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual_Head_1" geometry={nodes.Casual_Head_1.geometry} material={materials.Skin} skeleton={nodes.Casual_Head_1.skeleton} />
            <skinnedMesh name="Casual_Head_2" geometry={nodes.Casual_Head_2.geometry} material={materials.Eyebrows} skeleton={nodes.Casual_Head_2.skeleton} />
            <skinnedMesh name="Casual_Head_3" geometry={nodes.Casual_Head_3.geometry} material={materials.Eye} skeleton={nodes.Casual_Head_3.skeleton} />
            <skinnedMesh name="Casual_Head_4" geometry={nodes.Casual_Head_4.geometry} material={materials.Hair} skeleton={nodes.Casual_Head_4.skeleton} />
          </group>
          <skinnedMesh name="Casual2_Legs" geometry={nodes.Casual2_Legs.geometry} material={materials.LightBlue} skeleton={nodes.Casual2_Legs.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <group name="Casual_Body" position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual_Body_1" geometry={nodes.Casual_Body_1.geometry} material={materials.Skin} skeleton={nodes.Casual_Body_1.skeleton} />
            <skinnedMesh name="Casual_Body_2" geometry={nodes.Casual_Body_2.geometry} material={materials.Purple} skeleton={nodes.Casual_Body_2.skeleton} />
          </group>
          <skinnedMesh name="Suit_Legs" geometry={nodes.Suit_Legs.geometry} material={materials.Suit} skeleton={nodes.Suit_Legs.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <skinnedMesh name="Suit_Feet" geometry={nodes.Suit_Feet.geometry} material={materials.Black} skeleton={nodes.Suit_Feet.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <group name="Suit_Body" position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Suit_Body_1" geometry={nodes.Suit_Body_1.geometry} material={materials.Skin} skeleton={nodes.Suit_Body_1.skeleton} />
            <skinnedMesh name="Suit_Body_2" geometry={nodes.Suit_Body_2.geometry} material={materials.White} skeleton={nodes.Suit_Body_2.skeleton} />
            <skinnedMesh name="Suit_Body_3" geometry={nodes.Suit_Body_3.geometry} material={materials.Suit} skeleton={nodes.Suit_Body_3.skeleton} />
            <skinnedMesh name="Suit_Body_4" geometry={nodes.Suit_Body_4.geometry} material={materials.Tie} skeleton={nodes.Suit_Body_4.skeleton} />
          </group>
          <group name="Suit_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Suit_Head_1" geometry={nodes.Suit_Head_1.geometry} material={materials.Skin} skeleton={nodes.Suit_Head_1.skeleton} />
            <skinnedMesh name="Suit_Head_2" geometry={nodes.Suit_Head_2.geometry} material={materials.Eyebrows} skeleton={nodes.Suit_Head_2.skeleton} />
            <skinnedMesh name="Suit_Head_3" geometry={nodes.Suit_Head_3.geometry} material={materials.Eye} skeleton={nodes.Suit_Head_3.skeleton} />
            <skinnedMesh name="Suit_Head_4" geometry={nodes.Suit_Head_4.geometry} material={materials.Hair} skeleton={nodes.Suit_Head_4.skeleton} />
          </group>
          <group name="Backpack" position={[0, 1.37, -0.12]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={26.08}>
            <skinnedMesh name="Backpack_1" geometry={nodes.Backpack_1.geometry} material={materials.Brown} skeleton={nodes.Backpack_1.skeleton} />
            <skinnedMesh name="Backpack_2" geometry={nodes.Backpack_2.geometry} material={materials.Green} skeleton={nodes.Backpack_2.skeleton} />
            <skinnedMesh name="Backpack_3" geometry={nodes.Backpack_3.geometry} material={materials.LightGreen} skeleton={nodes.Backpack_3.skeleton} />
            <skinnedMesh name="Backpack_4" geometry={nodes.Backpack_4.geometry} material={materials.Gold} skeleton={nodes.Backpack_4.skeleton} />
          </group>
          <group name="Sword" position={[-0.68, 1.41, 0.09]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Sword_1" geometry={nodes.Sword_1.geometry} material={materials.Brown} skeleton={nodes.Sword_1.skeleton} />
            <skinnedMesh name="Sword_2" geometry={nodes.Sword_2.geometry} material={materials.Metal} skeleton={nodes.Sword_2.skeleton} />
            <skinnedMesh name="Sword_3" geometry={nodes.Sword_3.geometry} material={materials.Metal_Dark} skeleton={nodes.Sword_3.skeleton} />
          </group>
          <group name="Pistol" position={[-0.72, 1.42, 0.09]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Pistol_1" geometry={nodes.Pistol_1.geometry} material={materials.Black} skeleton={nodes.Pistol_1.skeleton} />
            <skinnedMesh name="Pistol_2" geometry={nodes.Pistol_2.geometry} material={materials.Grey} skeleton={nodes.Pistol_2.skeleton} />
            <skinnedMesh name="Pistol_3" geometry={nodes.Pistol_3.geometry} material={materials.DarkBrown} skeleton={nodes.Pistol_3.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Humans_Master.glb')
