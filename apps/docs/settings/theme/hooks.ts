import type { ColorScheme } from "./types"

export function getNextColorScheme(current: ColorScheme): ColorScheme {
  switch (current) {
    case "dark":
      return "light"
    case "light":
      return "system"
    case "system":
      return "dark"
    default:
      return "dark"
  }
}
