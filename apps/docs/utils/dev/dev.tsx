import { ReactNode } from "react"

export const isDev = process.env.NEXT_PUBLIC_DEV_ENV === "true"

const Dev = ({ children }: { children: ReactNode }) => {
  if (!isDev) {
    return null
  }
  return children
}

export default Dev
