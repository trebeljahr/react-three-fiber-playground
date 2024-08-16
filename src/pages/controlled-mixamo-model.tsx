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
  const { nodes, materials, animations } = useGLTF('/Mixamo.glb') as any
  //   const { actions } = useAnimations(animations, group)
  console.log(animations)

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

useGLTF.preload('/Mixamo.glb')

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

  // useHelper(directionalLightRef, DirectionalLightHelper, 1);

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

  const { gridSize, ...gridConfig } = {
    gridSize: [10.5, 10.5],
    cellSize: { value: 0.6, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    cellColor: '#6f6f6f',
    sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: 'lightgray',
    fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: false,
  }

  return (
    <>
      <EcctrlJoystick />

      <Canvas>
        <Physics timeStep='vary'>
          <KeyboardControls map={keyboardMap}>
            <Ecctrl animated>
              <EcctrlAnimation
                characterURL={characterURL} // Must have property
                animationSet={animationSet} // Must have property
              >
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
