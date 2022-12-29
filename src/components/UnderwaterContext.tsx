import { useFrame, useThree } from '@react-three/fiber'
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'

export const waterHeight = 100

type UnderwaterContextType = {
  underwater: boolean
  onSubmerge: (fn: Subscriber) => void
  onSurfacing: (fn: Subscriber) => void
}
const UnderwaterContext = createContext({} as UnderwaterContextType)

export const useUnderwaterContext = () => {
  return useContext(UnderwaterContext)
}

type Subscriber = (underwater: boolean) => void

export const UnderwaterContextProvider = ({ children }: PropsWithChildren) => {
  const { camera } = useThree()
  const [underwater, setUnderwater] = useState(true)
  const surfaceSubscribers = useMemo(() => new Map<Subscriber, Subscriber>(), [])
  const submergeSubscribers = useMemo(() => new Map<Subscriber, Subscriber>(), [])

  useFrame(() => {
    if (camera.position.y > waterHeight) {
      if (underwater) {
        setUnderwater(false)
      }
    } else {
      if (!underwater) {
        setUnderwater(true)
      }
    }
  })

  useEffect(() => {
    if (underwater) {
      submergeSubscribers.forEach((fn) => {
        fn(underwater)
      })
    } else {
      surfaceSubscribers.forEach((fn) => {
        fn(underwater)
      })
    }
  }, [surfaceSubscribers, underwater, submergeSubscribers])

  const contextValue = useMemo(() => {
    const onSurfacing = (fn: (newState: boolean) => void) => {
      surfaceSubscribers.set(fn, fn)
    }

    const onSubmerge = (fn: (newState: boolean) => void) => {
      submergeSubscribers.set(fn, fn)
    }

    return { onSubmerge, onSurfacing, underwater }
  }, [underwater, surfaceSubscribers, submergeSubscribers])

  return <UnderwaterContext.Provider value={contextValue}>{children}</UnderwaterContext.Provider>
}
