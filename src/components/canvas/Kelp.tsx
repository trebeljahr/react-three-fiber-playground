import { useKelp } from '@models/Kelp4'
import { extend, Node, useFrame } from '@react-three/fiber'
import kelpFrag from '@shaders/kelp.frag'
import kelpVert from '@shaders/kelp.vert'
import { LayerMaterial } from 'lamina'
import { Abstract } from 'lamina/vanilla'

import { LayerProps } from 'lamina/types'
import { forwardRef, useEffect, useRef } from 'react'
import { BufferGeometry, InstancedMesh, Object3D, ShaderMaterial } from 'three'
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
    ref.current.uniforms.u_time = clock.getElapsedTime()
  })

  return (
    <LayerMaterial color='green' attach='material'>
      <DisplacementLayerComponent ref={ref} fragmentShader={kelpFrag} vertexShader={kelpVert} />
    </LayerMaterial>
  )
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
      <KelpShaderMaterial />
    </instancedMesh>
  )
}
