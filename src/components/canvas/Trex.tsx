import { GenericAnimationController } from '@hacks/GenericAnimationController'
import { useAnimationsWithCleanup } from '@hooks/useAnimationsWithCleanup'
import { usePrevious } from '@hooks/usePrevious'
import { useGLTF, useKeyboardControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Group, LoopOnce, Vector3 } from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Trex_1: THREE.SkinnedMesh
    Trex_2: THREE.SkinnedMesh
    Trex_3: THREE.SkinnedMesh
    Trex_4: THREE.SkinnedMesh
    Trex_5: THREE.SkinnedMesh
    root: THREE.Bone
  }
  materials: {
    LightYellow: THREE.MeshStandardMaterial
    LightGreen: THREE.MeshStandardMaterial
    Green: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Red: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName =
  | 'Armature|TRex_Attack'
  | 'Armature|TRex_Death'
  | 'Armature|TRex_Idle'
  | 'Armature|TRex_Jump'
  | 'Armature|TRex_Run'
  | 'Armature|TRex_Walk'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

interface PossibleActions {
  'Armature|TRex_Attack': THREE.AnimationAction
  'Armature|TRex_Death': THREE.AnimationAction
  'Armature|TRex_Idle': THREE.AnimationAction
  'Armature|TRex_Jump': THREE.AnimationAction
  'Armature|TRex_Run': THREE.AnimationAction
  'Armature|TRex_Walk': THREE.AnimationAction
}

// const rotationSpeed = 20
// const speed = 0.5

export function FollowingTrex() {
  const group = useRef<THREE.Group>()
  const { camera } = useThree()

  useFrame(() => {
    const cameraPosInPlane = camera.position.clone().normalize().setY(0)
    group.current.lookAt(cameraPosInPlane)

    const direction = cameraPosInPlane.sub(group.current.position)
    // const distance = direction.length()
  })

  return (
    <group position={new Vector3(0, 0, -30)} ref={group}>
      <Trex />
    </group>
  )
}

function AnimationController({ actions }: { actions: PossibleActions }) {
  const [state, setState] = useState<ActionName>('Armature|TRex_Idle')
  const previousState = usePrevious(state)

  const [subscribe] = useKeyboardControls()

  useEffect(() => {
    subscribe((state) => {
      if (!actions) return

      const { attack, jump, forward, backward, left, right, sprint } = state
      if (attack) {
        if (!actions['Armature|TRex_Attack']) return
        actions['Armature|TRex_Attack'].setLoop(LoopOnce, 1)
        actions['Armature|TRex_Attack'].clampWhenFinished = true
        actions['Armature|TRex_Attack'].reset().play()
      }
      if (jump) {
        if (!actions['Armature|TRex_Jump']?.isRunning()) {
          if (!actions['Armature|TRex_Jump']) return
          actions['Armature|TRex_Jump'].setLoop(LoopOnce, 1)
          actions['Armature|TRex_Jump'].clampWhenFinished = true
          actions['Armature|TRex_Jump'].reset().play()
        }
      }
      if (forward || backward || left || right) {
        if (sprint) return setState('Armature|TRex_Run')

        return setState('Armature|TRex_Walk')
      }
      return setState('Armature|TRex_Idle')
    })
  }, [actions, subscribe])

  useEffect(() => {
    const fadeDuration = 0.5
    const current = actions[previousState]
    const toPlay = actions[state]
    current?.fadeOut(fadeDuration)
    toPlay?.reset().fadeIn(fadeDuration).play()
  }, [state, actions, previousState])

  return null
}

export const useTrex = () => {
  return useGLTF('/Trex.glb') as unknown as GLTFResult
}

export const Trex = (
  props: JSX.IntrinsicElements['group'] & { withAnimations?: boolean; withAnimationController?: boolean },
) => {
  const ref = useRef<Group>()
  const { nodes, materials, animations } = useGLTF('/Trex.glb') as unknown as GLTFResult
  const { withAnimations = false, withAnimationController = false } = props
  const { actions } = useAnimationsWithCleanup(animations, ref)

  return (
    <group {...props} ref={ref} dispose={null}>
      {withAnimationController && <GenericAnimationController actions={actions} />}
      {withAnimations && <AnimationController actions={actions} />}
      <group name='Armature' rotation={[-Math.PI / 2, 0, Math.PI]} scale={300}>
        <primitive object={nodes.root} />
      </group>
      <group name='Trex' rotation={[-Math.PI / 2, 0, Math.PI]} scale={100}>
        <skinnedMesh
          name='Trex_1'
          geometry={nodes.Trex_1.geometry}
          material={materials.LightYellow}
          skeleton={nodes.Trex_1.skeleton}
        />
        <skinnedMesh
          name='Trex_2'
          geometry={nodes.Trex_2.geometry}
          material={materials.LightGreen}
          skeleton={nodes.Trex_2.skeleton}
        />
        <skinnedMesh
          name='Trex_3'
          geometry={nodes.Trex_3.geometry}
          material={materials.Green}
          skeleton={nodes.Trex_3.skeleton}
        />
        <skinnedMesh
          name='Trex_4'
          geometry={nodes.Trex_4.geometry}
          material={materials.Black}
          skeleton={nodes.Trex_4.skeleton}
        />
        <skinnedMesh
          name='Trex_5'
          geometry={nodes.Trex_5.geometry}
          material={materials.Red}
          skeleton={nodes.Trex_5.skeleton}
        />
      </group>
    </group>
  )
}
