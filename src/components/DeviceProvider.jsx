import { useEffect, useMemo, useState } from 'react'
import { DeviceContext } from './deviceContext.js'

const deriveLayout = () => {
    const ua = navigator.userAgent || ''
    const w = window.screen?.width || window.innerWidth
    const isIOS = /iPhone|iPad|iPod/i.test(ua)
    const isAndroid = /Android/i.test(ua)
    return isIOS && w >= 375 && w <= 430 ? 'ios' : (isAndroid && w <= 380 ? 'android' : 'desktop')
}

export function DeviceProvider({ children }) {
    const [layout, setLayout] = useState('desktop')

    useEffect(() => {
        const layoutName = deriveLayout()
        setLayout(layoutName)
        document.documentElement.classList.remove('layout-ios', 'layout-android', 'layout-desktop')
        document.documentElement.classList.add(`layout-${layoutName}`)
    }, [])

    const value = useMemo(() => ({ layout }), [layout])
    return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
}
