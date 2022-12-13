import { useKelp } from '@models/Kelp4'
import { extend, Node, useFrame } from '@react-three/fiber'
import kelpFrag from '@shaders/kelp.frag'
import kelpVert from '@shaders/kelp.vert'
import { LayerMaterial } from 'lamina'
import { Abstract } from 'lamina/vanilla'

import { LayerProps } from 'lamina/types'
import { forwardRef, useEffect, useMemo, useRef } from 'react'
import { BufferGeometry, InstancedMesh, MeshStandardMaterial, Object3D, Shader, ShaderMaterial } from 'three'
import { randFloat } from 'three/src/math/MathUtils'

interface DisplacementLayerProps extends LayerProps {
  fragmentShader: string
  vertexShader: string
}

class DisplacementLayer extends Abstract {
  public u_time = 0

  static fragmentShader: string
  static vertexShader: string

  constructor(props?: DisplacementLayerProps) {
    super(DisplacementLayer, {
      name: 'KelpLayer',
      ...props,
    })
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      displacementLayer_: Node<DisplacementLayer, typeof DisplacementLayer>
    }
  }
}

extend({ DisplacementLayer_: DisplacementLayer })

const DisplacementLayerComponent = forwardRef<DisplacementLayer, DisplacementLayerProps>(function DisplacementLayer(
  props,
  ref,
) {
  return <displacementLayer_ ref={ref} {...props} />
}) as React.ForwardRefExoticComponent<DisplacementLayerProps & React.RefAttributes<DisplacementLayer>>

function KelpShaderMaterial() {
  const ref = useRef<DisplacementLayer>()

  useFrame((state) => {
    const { clock } = state
    // ref.current.uniforms.u_time = clock.getElapsedTime()
  })

  return (
    <LayerMaterial color='green' attach='material'>
      <DisplacementLayerComponent ref={ref} fragmentShader={kelpFrag} vertexShader={kelpVert} />
    </LayerMaterial>
  )
}

function KelpSimpleShaderMaterial() {
  const ref = useRef<ShaderMaterial>()
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
    }),
    [],
  )

  useFrame((state) => {
    const { clock } = state
    ref.current.uniforms.u_time.value = clock.getElapsedTime()
  })

  return <shaderMaterial ref={ref} vertexShader={kelpVert} fragmentShader={kelpFrag} uniforms={uniforms} />
}

export function ExtendedKelpMaterial() {
  const materialRef = useRef<MeshStandardMaterial>()
  const shaderRef = useRef<Shader>()
  useFrame((_, delta) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value += delta
    }
  })

  useEffect(() => {
    const material = materialRef.current
    if (!material) return

    material.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 }

      // shader hacking!
      shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        `
          #include <common>

          uniform float uTime;

          mat2 get2dRotateMatrix(float _angle)
          {
              return mat2(cos(_angle), - sin(_angle), sin(_angle), cos(_angle));
          }
      `,
      )
      shader.vertexShader = shader.vertexShader.replace(
        '#include <beginnormal_vertex>',
        `
      #include <beginnormal_vertex>

      float angle = (position.y + uTime) * 0.9;
      mat2 rotateMatrix = get2dRotateMatrix(angle);

      objectNormal.xz = rotateMatrix * objectNormal.xz;
      `,
      )
      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
      #include <begin_vertex>

      transformed.xz = rotateMatrix * transformed.xz;
      `,
      )
      shaderRef.current = shader
    }
  }, [materialRef, shaderRef])

  return <meshStandardMaterial ref={materialRef} color='green' />
}

export function KelpForest({ amount = 1 }) {
  const { nodes } = useKelp()

  const kelpGeometry = nodes.Object_7.geometry

  const ref = useRef<InstancedMesh<BufferGeometry, ShaderMaterial>>()

  useEffect(() => {
    const temp = new Object3D()

    for (let i = 0; i < amount; i++) {
      const scale = randFloat(0.2, 0.3)

      temp.position.set(0, 0, 0)
      temp.rotation.set(0, randFloat(0.2, 0.5), 0)
      temp.scale.set(scale, scale, scale)

      temp.updateMatrix()

      ref.current.setMatrixAt(i, temp.matrix)
    }

    ref.current.instanceMatrix.needsUpdate = true
  }, [amount])

  return (
    <instancedMesh ref={ref} args={[kelpGeometry, null, amount]}>
      {/* <shaderMaterial vertexShader={kelpVert} fragmentShader={kelpFrag} uniforms={uniforms} /> */}
      {/* <KelpShaderMaterial /> */}
      {/* <KelpSimpleShaderMaterial /> */}
      <ExtendedKelpMaterial />
    </instancedMesh>
  )
}
