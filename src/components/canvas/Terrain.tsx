import { useBeachMaterial } from '@models/useBeachMaterial'
import { Box } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useEffect, useMemo, useRef, useState } from 'react'
import { DynamicDrawUsage, InstancedMesh, Matrix4, Object3D, PlaneGeometry, Quaternion, Vector2, Vector3 } from 'three'
import { SingleKelpTile } from './Kelp'

export const Floor = () => {
  return (
    <RigidBody type='fixed' colliders='cuboid'>
      <Box position={[0, -5, 0]} scale={[200, 10, 200]} rotation={[0, 0, 0]} receiveShadow>
        <meshBasicMaterial color='#7EC850' />
      </Box>
    </RigidBody>
  )
}

export const viewDistance: number = 2
export const scale: number = 70

function computeChunkCoordinates(pos: Vector3) {
  return new Vector2(Math.floor(pos.x / scale) * scale, Math.floor(pos.z / scale) * scale)
}

function key(pos: Vector2) {
  return `${pos.x},${pos.y}`
}

const maxDistance = scale * (viewDistance !== 0 ? viewDistance : 1)

export function Terrain() {
  const [chunks, setChunks] = useState<Record<string, Vector2>>({})

  const { camera } = useThree()

  useFrame(() => {
    const cPos = computeChunkCoordinates(camera.position)
    for (let i in chunks) {
      if (Math.abs(cPos.x - chunks[i].x) > maxDistance || Math.abs(cPos.y - chunks[i].y) > maxDistance) {
        // console.log('too far')

        setChunks((old) => {
          const copy = { ...old }
          delete copy[i]
          return copy
        })
      }

      for (let x = -viewDistance; x <= viewDistance; x++) {
        for (let y = -viewDistance; y <= viewDistance; y++) {
          const newPosition = new Vector2(x * scale + cPos.x, y * scale + cPos.y)
          if (!chunks[key(newPosition)]) {
            setChunks((old) => {
              return { ...old, [key(newPosition)]: newPosition }
            })
          }
        }
      }
    }
  })

  useEffect(() => {
    console.log(Object.keys(chunks))
  }, [chunks])

  useEffect(() => {
    const tempPoints: Record<string, Vector2> = {}

    for (let x = -viewDistance; x <= viewDistance; x++) {
      for (let z = -viewDistance; z <= viewDistance; z++) {
        const newPosition = new Vector2(x * scale, z * scale)
        tempPoints[key(newPosition)] = newPosition
      }
    }
    setChunks(tempPoints)
  }, [])

  return (
    <>
      {Object.values(chunks).map((offset) => {
        return (
          <group position={new Vector3(offset.x, 0, offset.y)} key={key(offset)}>
            <SingleKelpTile />
            <Plane />
          </group>
        )
      })}
    </>
  )
}

// export function Terrain2() {
//   const {
//     materials: { aerial_beach_01: beachMaterial },
//   } = useBeachMaterial()

//   const ref = useRef<InstancedMesh<PlaneGeometry>>()
//   const { camera } = useThree()
//   const maxDistance = scale * scale * (viewDistance !== 0 ? viewDistance * viewDistance : 1)

//   const points = useMemo<Vector3[]>(() => {
//     const tempPoints: Vector3[] = []
//     for (let x = -viewDistance; x <= viewDistance; x++) {
//       for (let z = -viewDistance; z <= viewDistance; z++) {
//         const newPosition = new Vector2(x * scale, 0, z * scale)
//         tempPoints.push(newPosition)
//       }
//     }
//     return tempPoints
//   }, [])

//   console.log(points)

//   useEffect(() => {
//     const temp = new Object3D()

//     for (let i = 0; i < points.length; i++) {
//       const { x, z } = points[i]
//       temp.position.set(x, 0, z)
//       temp.scale.set(scale, scale, scale)
//       temp.rotation.set(Math.PI / 2, 0, 0)
//       temp.updateMatrix()

//       ref.current.setMatrixAt(i, temp.matrix)
//     }

//     ref.current.instanceMatrix.setUsage(DynamicDrawUsage)
//     ref.current.instanceMatrix.needsUpdate = true
//   }, [points])

//   useFrame(() => {
//     if (!ref.current) return
//     // const chunkCoordinates = computeChunkCoordinates(camera.position, scale)
//     // console.log(chunkCoordinates)

//     const tempPoints = {}
//     for (let x = -viewDistance; x <= viewDistance; x++) {
//       for (let z = -viewDistance; z <= viewDistance; z++) {
//         const chunkOffset = computeChunkCoordinates(camera.position)
//         const newPosition = chunkOffset.add(new Vector3(x * scale, 0, z * scale))
//         tempPoints[`${newPosition.x},${newPosition.z}`] = newPosition
//       }
//     }

//     const toDiscard: number[] = []
//     const meshMatrices: Record<string, { position: Vector3; scaleVec: Vector3; rotation: Quaternion; i: number }> = {}

//     for (let i = 0; i < points.length; i++) {
//       //   const { x, z } = points[i]
//       //   const temp = new Object3D()
//       const position = new Vector3(0, 0, 0)
//       const scaleVec = new Vector3(0, 0, 0)
//       const rotation = new Quaternion()

//       let matrix = new Matrix4()

//       ref.current.updateMatrixWorld()
//       ref.current.getMatrixAt(i, matrix)
//       matrix.decompose(position, rotation, scaleVec)

//       const { x, z } = position

//       //   console.log(x, z)
//       if (tempPoints[`${x},${z}`]) {
//         toDiscard.push(i)
//       } else {
//         meshMatrices[`${x},${z}`] = { position, scaleVec, rotation, i }
//       }
//     }

//     function createMissing() {
//       const existing = Object.keys(meshMatrices)

//       const tempKeys = Object.keys(tempPoints)
//       console.log(existing)
//       console.log(tempKeys)
//       const missing = tempKeys.filter((key) => existing.includes(key))
//       //   console.log(missing)
//     }

//     createMissing()
//     // const toCreate: { x: number; z: number }[] = Object.keys(tempPoints.filter(({ position }) => {}))

//     //     return
//     //   } else {
//     // console.log('point out of range')
//     // const temp = new Object3D()
//     // const position = new Vector3(0, 0, 0)
//     // const scaleVec = new Vector3(0, 0, 0)
//     // const rotation = new Quaternion()
//     // let needsUpdate = false
//     // let matrix = new Matrix4()
//     // ref.current.updateMatrixWorld()
//     // ref.current.getMatrixAt(i, matrix)
//     // matrix.decompose(position, rotation, scaleVec)
//     // // console.log(position)
//     // temp.matrix = matrix
//     // const cameraXZPos = camera.position.clone().setY(0)
//     // if (Math.abs(position.distanceToSquared(cameraXZPos)) > maxDistance) {
//     // console.log('too far!')
//     // console.log(Math.abs(position.distanceToSquared(cameraXZPos)))
//     //   console.log(position)
//     //   console.log(maxDistance)
//     // console.log(position
//     // console.log(computeChunkCoordinates(camera.position, scale))
//     // const diffVec = position.sub(cameraXZPos).normalize().negate().multiplyScalar(scale)
//     // const { x, z } = diffVec.add(cameraXZPos)
//     // console.log(x, z)
//     // temp.position.set(x, 0, z)
//     // temp.rotation.setFromQuaternion(rotation)
//     // temp.scale.set(scaleVec.x, scaleVec.y, scaleVec.z)
//     // temp.updateMatrix()
//     // ref.current.setMatrixAt(i, temp.matrix)
//     // needsUpdate = true
//     // }
//     // ref.current.instanceMatrix.needsUpdate = needsUpdate
//     //   }
//   })

//   return (
//     <>
//       <instancedMesh ref={ref} args={[null, beachMaterial, points.length]}>
//         <planeGeometry />
//       </instancedMesh>
//     </>
//   )
// }

export function Plane({ position = new Vector3(0, 0, 0) }) {
  const {
    materials: { aerial_beach_01: beachMaterial },
  } = useBeachMaterial()

  return (
    <mesh position={position} material={beachMaterial} rotation={[Math.PI / 2, 0, 0]} scale={[scale, scale, scale]}>
      <planeGeometry />
    </mesh>
  )
}
