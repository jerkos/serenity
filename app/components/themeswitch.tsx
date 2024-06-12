"use client"

import { useCallback, useState } from "react"

export default () => {
    const [theme, setTheme] = useState('light')

    const onSwitch = useCallback(() => {
        const html = document.documentElement;
        html && html.classList.toggle('dark')
        setTheme(t => t === 'dark' ? 'light' : 'dark')
    }, [])


    return <button onClick={onSwitch}>{`${theme === 'light' ? 'Light': 'Dark'} Mode`}</button>
}