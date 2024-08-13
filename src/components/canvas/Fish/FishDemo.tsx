import { Fishs } from '@components/canvas/Fish'
import { Box } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useEffect } from 'react'
import { Vector3 } from 'three'

export const FishDemo = () => {
  const camera = useThree((state) => state.camera)

  useEffect(() => {
    camera.position.copy(new Vector3(0, 0, 50))
    camera.near = 1
    camera.far = 3000
  }, [])

  return (
    <>
      <Fishs />
      <Box args={[1, 1, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined}>
        <meshPhysicalMaterial color='pink' />
      </Box>
      <ambientLight />
      <fog color={0xffffff} near={100} far={1000} />
      <Perf />
      {/* <OrbitControls /> */}
      {/* <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
          { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
          { name: 'jump', keys: ['Space'] },
          { name: 'descend', keys: ['c', 'C'] },
          { name: 'sprint', keys: ['Shift'] },
          { name: 'attack', keys: ['F', 'f'] },
        ]}>
        <Physics>
          <SwimmingPlayerControls />
        </Physics>
      </KeyboardControls> */}
    </>
  )
}
