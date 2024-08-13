import Rapier from '@dimforge/rapier3d-compat'
import { useJoystick } from '@pages/joystick'
import { Box, KeyboardControls, PointerLockControls, useKeyboardControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { CapsuleCollider, RigidBody, RigidBodyApi, useRapier } from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Vector3 } from 'three'

const idealCameraPosition = new THREE.Vector3()
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const rotation = new THREE.Vector3()

const accelerationTimeAirborne = 0.2
const accelerationTimeGrounded = 0.025

const timeToJumpApex = 1.2
const maxJumpHeight = 10
const minJumpHeight = 6
const jumpGravity = -(1.5 * maxJumpHeight) / Math.pow(timeToJumpApex, 1.5)
const maxJumpVelocity = Math.abs(jumpGravity) * timeToJumpApex
const minJumpVelocity = Math.sqrt(2 * Math.abs(jumpGravity) * minJumpHeight)

const velocityXZSmoothing = 0.2
const velocityXZMin = 0.0001
const _euler = new THREE.Euler(0, 0, 0, 'YXZ')
const _PI_2 = Math.PI / 2
const maxPolarAngle = Math.PI
const minPolarAngle = 0

export const FirstPersonController = (props: JSX.IntrinsicElements['group']) => {
  const [, get] = useKeyboardControls()

  const controlsRef = useRef(null)

  const camera = useThree((state) => state.camera)

  useJoystick((data) => {
    // console.log(data)
    const rotationSpeed = 0.005
    const { leveledX, leveledY } = data

    console.log(camera.rotation)

    _euler.setFromQuaternion(camera.quaternion)

    _euler.y -= leveledX * rotationSpeed
    _euler.x += leveledY * rotationSpeed

    _euler.x = Math.max(_PI_2 - maxPolarAngle, Math.min(_PI_2 - minPolarAngle, _euler.x))

    camera.quaternion.setFromEuler(_euler)
  })

  const rapier = useRapier()

  const characterRigidBody = useRef<RigidBodyApi>(null!)

  const characterController = useRef<Rapier.KinematicCharacterController>(null!)

  const velocity = useRef({ x: 0, z: 0 })

  const holdingJump = useRef(false)
  const jumpVelocity = useRef(0)
  const jumpTime = useRef(0)

  useEffect(() => {
    camera.rotation.set(0, 0, 0)

    const world = rapier.world.raw()

    characterController.current = world.createCharacterController(0.1)
    characterController.current.enableAutostep(0.7, 0.3, true)
    characterController.current.enableSnapToGround(0.7)
    characterController.current.setApplyImpulsesToDynamicBodies(true)

    return () => {
      characterController.current.free()
      characterController.current = null!
    }
  }, [rapier.world])

  useFrame((state, delta) => {
    return
  })

  return (
    <>
      <RigidBody
        {...props}
        ref={characterRigidBody}
        colliders={false}
        mass={1}
        type='kinematicPosition'
        position={[0, 20, 0]}
        enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[0.5, 0.5]} />
      </RigidBody>
      {/* <PointerLockControls ref={controlsRef} makeDefault /> */}
    </>
  )
}
