import { Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { PointerLockControls, useKeyboardControls } from '@react-three/drei'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { clamp, lerp } from 'three/src/math/MathUtils'
import { PlayerControlProps, WithDefaultControls } from './DefaultControls'

const direction = new Vector3()
const frontVector = new Vector3()
const sideVector = new Vector3()

export function SwimmingPlayer(props: PlayerControlProps) {
  return (
    <WithDefaultControls>
      <SwimmingPlayerControls {...props} />
    </WithDefaultControls>
  )
}

function SwimmingPlayerControls({ children, speed = 5 }: PropsWithChildren<{ speed?: number }>) {
  const [subscribe, get] = useKeyboardControls()
  const ref = useRef<RigidBodyApi>()
  const { camera } = useThree()
  const speedFactor = useRef(1)
  const desiredFactor = useRef(1)
  const lerpConstant = useRef(0)

  useEffect(() => {
    subscribe(({ sprint }) => {
      const newFactor = sprint ? 3 : 1
      if (desiredFactor.current !== newFactor) {
        lerpConstant.current = 0
      }
      desiredFactor.current = newFactor
    })
  }, [subscribe])

  useFrame((_, delta) => {
    if (!ref.current) return

    const { forward, backward, left, right, jump, descend, sprint } = get()

    camera.position.set(...ref.current.translation().toArray())

    frontVector.set(0, 0, +backward - +forward)
    sideVector.set(+left - +right, 0, 0)

    const desiredSpeed = sprint ? 2 : 1
    lerpConstant.current += 0.1

    speedFactor.current = lerp(speedFactor.current, desiredSpeed, clamp(0, 1, lerpConstant.current))

    direction
      .subVectors(frontVector, sideVector)
      .applyEuler(camera.rotation)
      .add(new Vector3(0, +jump - +descend, 0))
      .normalize()
      .multiplyScalar(speed * speedFactor.current)

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
