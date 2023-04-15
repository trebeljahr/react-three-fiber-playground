import { Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { PointerLockControls, useKeyboardControls } from '@react-three/drei'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { PlayerControlProps, WithDefaultControls } from './DefaultControls'

const direction = new Vector3()
const frontVector = new Vector3()
const sideVector = new Vector3()

export function FlyingPlayer(props: PlayerControlProps) {
  return (
    <WithDefaultControls>
      <FlyingPlayerControls {...props} />
    </WithDefaultControls>
  )
}

function FlyingPlayerControls({ children, speed = 10 }: PropsWithChildren<{ speed?: number }>) {
  const [, get] = useKeyboardControls()
  const ref = useRef<RigidBodyApi>()
  const { camera } = useThree()

  useFrame(() => {
    if (!ref.current) return

    const { forward, backward, left, right, jump, descend } = get()

    camera.position.set(...ref.current.translation().toArray())

    frontVector.set(0, 0, +backward - +forward)
    sideVector.set(+left - +right, 0, 0)

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(camera.rotation)
      .setY((+jump - +descend) * speed)

    ref.current.setLinvel({ x: direction.x, y: direction.y, z: direction.z })
  })

  return (
    <>
      <RigidBody
        ref={ref}
        colliders={false}
        mass={1}
        type='dynamic'
        position={[0, 10, 0]}
        enabledRotations={[false, false, false]}>
        {children}
      </RigidBody>
      <PointerLockControls />
    </>
  )
}
