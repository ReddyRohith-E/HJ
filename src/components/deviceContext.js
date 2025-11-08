import { createContext, useContext } from 'react'

export const DeviceContext = createContext({ layout: 'desktop' })
export const useDevice = () => useContext(DeviceContext)
