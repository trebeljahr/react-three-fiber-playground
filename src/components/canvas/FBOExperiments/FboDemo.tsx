import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { Vector3 } from 'three'
import { FBOParticles } from './Particles'
import { OrbitControls } from '@react-three/drei'

export const FboDemo = () => {
  const camera = useThree((state) => state.camera)

  useEffect(() => {
    camera.position.copy(new Vector3(1.5, 1.5, 2.5))
  }, [])

  return (
    <>
      <FBOParticles />
      <OrbitControls />
      <color attach='background' args={['#20222B']} />
    </>
  )
}
