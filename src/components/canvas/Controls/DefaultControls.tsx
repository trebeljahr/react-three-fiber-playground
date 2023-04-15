import { KeyboardControls } from '@react-three/drei'
import { PropsWithChildren } from 'react'

export const WithDefaultControls = ({ children }: PropsWithChildren) => {
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] },
        { name: 'descend', keys: ['c', 'C'] },
        { name: 'sprint', keys: ['Shift'] },
        { name: 'attack', keys: ['F', 'f'] },
      ]}>
      {children}
    </KeyboardControls>
  )
}

export type PlayerControlProps = {
  speed?: number
}
