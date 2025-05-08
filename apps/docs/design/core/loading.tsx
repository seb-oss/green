import React, { useEffect, useState } from 'react'
import { GdsFlex, GdsText } from '$/import/components'

const Loading = () => {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
    }, 10200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <GdsFlex
      align-items="center"
      justify-content="center"
      height="100%"
      width="100%"
      className={fadeOut ? 'fade-out' : ''}
    >
      <GdsText>Loading...</GdsText>
    </GdsFlex>
  )
}

export default Loading
