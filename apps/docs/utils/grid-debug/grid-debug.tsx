import { useEffect, useState } from "react"

export default function useGridDebug() {
  const [debug, setDebug] = useState(false)

  useEffect(() => {
    const isDev = process.env.NEXT_PUBLIC_DEV_ENV === "true"
    if (!isDev) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Alt") {
        setDebug(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "Alt") {
        setDebug(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  return debug
}
