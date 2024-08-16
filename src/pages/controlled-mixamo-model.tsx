import { Grid, KeyboardControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Ecctrl, { EcctrlAnimation, EcctrlJoystick } from 'ecctrl'
import { useRef } from 'react'

const characterURL = '/Mixamo.glb'

const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
]

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef()
  const { nodes, materials } = useGLTF(characterURL) as any

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Michelle' rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name='Ch03'
            geometry={nodes.Ch03.geometry}
            material={materials['Ch03_Body.002']}
            skeleton={nodes.Ch03.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(characterURL)

import { RigidBody } from '@react-three/rapier'
import { DirectionalLight } from 'three'

export function Floor() {
  return (
    <RigidBody type='fixed'>
      <mesh receiveShadow position={[0, -3.5, 0]}>
        <boxGeometry args={[300, 5, 300]} />
        <meshStandardMaterial color='lightblue' />
      </mesh>
    </RigidBody>
  )
}

export function Lights() {
  const directionalLightRef = useRef<DirectionalLight>()

  return (
    <>
      <directionalLight
        castShadow
        shadow-normalBias={0.06}
        position={[20, 30, 10]}
        intensity={5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={50}
        shadow-camera-top={50}
        shadow-camera-right={50}
        shadow-camera-bottom={-50}
        shadow-camera-left={-50}
        name='followLight'
        ref={directionalLightRef}
      />
      <ambientLight intensity={2} />
    </>
  )
}

export default function Page() {
  const animationSet = {
    idle: 'Idle',
    walk: 'Walk',
    run: 'Run',
    jump: 'Jump_Start',
    jumpIdle: 'Fall_Idle',
    jumpLand: 'Jump_Land',
  }

  return (
    <>
      <EcctrlJoystick />

      <Canvas>
        <Physics timeStep='vary'>
          <KeyboardControls map={keyboardMap}>
            <Ecctrl animated>
              <EcctrlAnimation characterURL={characterURL} animationSet={animationSet}>
                <Model />
              </EcctrlAnimation>
            </Ecctrl>
          </KeyboardControls>
          <Floor />
          <Lights />
        </Physics>
      </Canvas>
    </>
  )
}
