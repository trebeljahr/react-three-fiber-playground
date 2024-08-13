import JoystickController from 'joystick-controller'
import { useEffect, useState } from 'react'

export interface JoystickData {
  angle: string
  distance: string
  leveledX: number
  leveledY: number
  x: number
  y: number
}

export type JoystickCallback = (data: JoystickData) => void

const defaultParameters = {
  x: '15%',
  y: '15%',
  opacity: 0.5,
  maxRange: 80,
  radius: 70,
  joystickRadius: 40,
  joystickClass: 'joystick',
  containerClass: 'joystick-container',
  distortion: false,
  mouseClickButton: 'ALL',
  hideContextMenu: true,
}

export function useJoystick({ cb, params }: { cb?: JoystickCallback; params?: Partial<typeof defaultParameters> }) {
  const parameters = { ...defaultParameters, ...params }
  const [joystickData, setJoystickData] = useState<JoystickData | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const staticJoystick = new JoystickController(parameters, (data: JoystickData) => {
      setJoystickData(data)
      cb?.(data)
    })

    return () => {
      staticJoystick.destroy()
    }
  }, [])

  const getJoystickData = () => joystickData

  return getJoystickData
}
