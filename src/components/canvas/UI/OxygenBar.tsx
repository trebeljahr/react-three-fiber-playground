import { useUnderwaterContext } from '@hooks/UnderwaterContext'
import { In } from '@pages'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import { MeshBasicMaterial } from 'three'
import CustomShaderMaterial from 'three-custom-shader-material'
import CustomShaderMaterialType from 'three-custom-shader-material/vanilla'
import oxygenFrag from './oxygen.frag'

const defaultOxygenAmount = 60

export function OxygenBar() {
  // const materialRef = useRef<CustomShaderMaterialType>()
  const [oxygenAmount, setOxygenAmount] = useState(defaultOxygenAmount)
  const { underwater } = useUnderwaterContext()

  const { camera } = useThree()

  useEffect(() => {
    // function resetOxygen() {
    //   setOxygenAmount(defaultOxygenAmount)
    // }
    // console.log('adding new subscribers')

    // onSurfacing(() => {
    //   resetOxygen()
    //   intervalId && clearInterval(intervalId)
    // })

    // onSubmerging(() => {
    //   if (intervalId) {
    //     clearInterval(intervalId)
    //   }
    //   intervalId = setInterval(() => {
    //     setOxygenAmount((old) => old - 1)
    //   }, 1000)
    // })
    let intervalId: NodeJS.Timer
    if (!underwater) {
      intervalId && clearInterval(intervalId)
      setOxygenAmount(defaultOxygenAmount)
    } else {
      intervalId && clearInterval(intervalId)
      intervalId = setInterval(() => {
        setOxygenAmount((old) => old - 1)
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [underwater])

  return (
    <In>
      <div className='absolute top-0 left-0 z-30'>Oxygen: {oxygenAmount}</div>
      <div className='absolute left-0 z-30 top-10'>Depth: {100 - camera.position.y}</div>
    </In>
  )
  // useEffect(() => {
  //   if (materialRef.current) {
  //     materialRef.current.uniforms.oxygenAmount.value = oxygenAmount
  //   }
  // }, [oxygenAmount])

  // const uniforms = useMemo(
  //   () => ({
  //     oxygenAmount: {
  //       value: defaultOxygenAmount,
  //     },
  //   }),
  //   [],
  // )

  // return (
  //   <CustomShaderMaterial
  //     ref={materialRef}
  //     baseMaterial={MeshBasicMaterial}
  //     fragmentShader={oxygenFrag}
  //     uniforms={uniforms}
  //     flatShading
  //     color={'#4CBB17'}
  //   />
  // )
}
