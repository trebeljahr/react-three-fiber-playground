import {
  CylinderCollider,
  Debug,
  InstancedRigidBodies,
  InstancedRigidBodyApi,
  RigidBody,
  Vector3Array,
} from '@react-three/rapier'
import { useEffect, useRef } from 'react'
import { Euler, Vector3 } from 'three'
import { BirchTree_1 } from '@models/nature_pack'
import { useTree1 } from '@models/nature_pack/CommonTree_1'
import { default as Tree1 } from '@models/simple_nature_pack/Tree1'
import { Kelp3 } from '@models/Kelp3'
import { Kelp4, useKelp } from '@models/Kelp4'
import { randFloat } from 'three/src/math/MathUtils'

export const InstancedTreesWithPhysics = () => {
  const api = useRef<InstancedRigidBodyApi>(null)
  useEffect(() => {
    if (api.current) {
      api.current.forEach((body) => {
        // console.log(body)
        // console.log(body.translation())
      })
    }
  }, [])

  const { nodes, materials } = useTree1()
  const COUNT = 10

  // console.log(nodes, materials)

  const positions: Vector3Array[] = Array.from({ length: COUNT }, () => [random(-10, 10), 0, random(-10, 10)])
  const scaleFactor = 20
  const rotations: Vector3Array[] = Array.from({ length: COUNT }, () => [0, 0, Math.PI / 2])
  return (
    <group>
      <InstancedRigidBodies ref={api} colliders={false} type='fixed' {...{ positions, rotations }}>
        <instancedMesh
          args={[nodes.CommonTree_1_1.geometry, materials.Wood, COUNT]}
          scale={[scaleFactor, scaleFactor, scaleFactor]}>
          <CylinderCollider args={[2 / scaleFactor, 0.05 / scaleFactor]} />
        </instancedMesh>
      </InstancedRigidBodies>

      <InstancedRigidBodies ref={api} colliders={false} type='fixed' {...{ positions, rotations }}>
        <instancedMesh
          args={[nodes.CommonTree_1_2.geometry, materials.Green, COUNT]}
          scale={[scaleFactor, scaleFactor, scaleFactor]}
        />
      </InstancedRigidBodies>
    </group>
  )
}

export const TreeWithHullPhysics = () => {
  return (
    <RigidBody position={new Vector3(0, -7.5, 12)} type='fixed' colliders='hull'>
      <Tree1 />
    </RigidBody>
  )
}

export const TreeWithBallPhysics = () => {
  return (
    <RigidBody position={new Vector3(4, -7.5, 12)} type='fixed' colliders='ball'>
      <Tree1 />
    </RigidBody>
  )
}

export const TreeWithCuboidPhysics = () => {
  return (
    <RigidBody position={new Vector3(4, -7.5, 8)} type='fixed' colliders='cuboid'>
      <Tree1 />
    </RigidBody>
  )
}

export const TreeWithPhysics = () => {
  return (
    <RigidBody type='fixed' colliders='trimesh' position={new Vector3(0, -7.5, 8)}>
      <Tree1 />
    </RigidBody>
  )
}

export function random(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function Trees() {
  const positions = new Array(100).fill(0).map(() => new Vector3(random(-200, 200), 0, random(-200, 200)))
  return (
    <>
      {positions.map((pos, index) => {
        return <BirchTree_1 key={index} position={pos} scale={new Vector3(5, 5, 5)} />
      })}
    </>
  )
}

export function KelpForest({ amount = 1000 }) {
  const kelps = new Array(amount).fill(0).map(() => {
    const scale = randFloat(0.2, 0.3)

    return {
      pos: new Vector3(random(-200, 200), 0, random(-200, 200)),
      rot: new Euler(0, random(0.2, 0.5), 0),
      scale: new Vector3(scale, scale, scale),
    }
  })

  const { nodes, materials } = useKelp()

  const kelpGeometry = nodes.Object_7.geometry
  const kelpMaterial = materials.lambert2

  return (
    <>
      {kelps.map(({ pos, scale, rot }, index) => {
        return (
          <instancedMesh key={index} position={pos} scale={scale} rotation={rot}>
            <mesh material={kelpMaterial} geometry={kelpGeometry} />
          </instancedMesh>
        )
      })}
    </>
  )
}
