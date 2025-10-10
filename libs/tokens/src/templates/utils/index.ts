export function lowercaseFirstLetter(str: string): string {
  if (!str) return str
  return str.charAt(0).toLowerCase() + str.slice(1)
}

export default {
  lowercaseFirstLetter,
}
