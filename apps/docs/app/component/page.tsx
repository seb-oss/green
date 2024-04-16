"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter()

  useEffect(() => {
    router.push("/components")
  }, [router])

  return null
}
