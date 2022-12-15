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
export const scale: number = 60

function computeChunkCoordinates(pos: Vector3) {
  return new Vector2(Math.floor(pos.x / scale) * scale, Math.floor(pos.z / scale) * scale)
}

const maxDistance = scale * (viewDistance !== 0 ? viewDistance : 1)

type Chunk = {
  id: number
  offset: Vector2
}

export function Terrain() {
  const [chunks, setChunks] = useState<Chunk[]>(() => {
    const tempPoints = [] as Chunk[]

    let i = 0
    for (let x = -viewDistance; x <= viewDistance; x++) {
      for (let y = -viewDistance; y <= viewDistance; y++) {
        tempPoints.push({ offset: new Vector2(x * scale, y * scale), id: i++ })
      }
    }

    return tempPoints
  })

  const { camera } = useThree()

  useFrame(() => {
    const camPos = computeChunkCoordinates(camera.position)
    const chunksNeeded = [] as Vector2[]
    for (let x = -viewDistance; x <= viewDistance; x++) {
      for (let y = -viewDistance; y <= viewDistance; y++) {
        const chunkPos = new Vector2(x * scale + camPos.x, y * scale + camPos.y)
        const exists = chunks.find(({ offset }) => {
          return offset.x === chunkPos.x && offset.y === chunkPos.y
        })
        if (!exists) {
          chunksNeeded.push(chunkPos)
        }
      }
    }

    // console.log(chunksNeeded.length)

    let changed = false
    let i = 0
    const chunksCopy = chunks.map((chunk) => {
      if (Math.abs(camPos.x - chunk.offset.x) > maxDistance || Math.abs(camPos.y - chunk.offset.y) > maxDistance) {
        changed = true
        return { ...chunk, offset: chunksNeeded[i++] }
      }
      return chunk
    })

    if (changed) setChunks(chunksCopy)
  })

  return (
    <>
      {Object.values(chunks).map((chunk) => {
        return (
          <group position={new Vector3(chunk.offset.x, 0, chunk.offset.y)} key={chunk.id}>
            <SingleKelpTile />
            <Plane />
          </group>
        )
      })}
      <Box args={[1, 1, 1]}></Box>
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
