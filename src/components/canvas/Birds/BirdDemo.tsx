import { Birds } from '@components/canvas/Birds'
import { useThree } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useEffect } from 'react'
import { Vector3 } from 'three'

export const BirdDemo = () => {
  const camera = useThree((state) => state.camera)

  useEffect(() => {
    camera.position.copy(new Vector3(0, 0, 350))
    camera.near = 1
    camera.far = 3000
  }, [])

  return (
    <>
      <Birds />
      <fog color={0xffffff} near={100} far={1000} />
      <Perf />
    </>
  )
}
