import tunnel from 'tunnel-rat'
import JoystickController from 'joystick-controller'
import { useEffect } from 'react'

export const { In, Out } = tunnel()

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

export function useJoystick(joystickCallback?: JoystickCallback, overwriteParams?: Partial<typeof defaultParameters>) {
  const parameters = { ...defaultParameters, ...overwriteParams }
  useEffect(() => {
    if (typeof window === 'undefined') return

    const staticJoystick = new JoystickController(parameters, joystickCallback || console.log)

    return () => {
      staticJoystick.destroy()
    }
  }, [])
}
export default function Page() {
  useJoystick()

  return (
    <>
      <Out />
    </>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
