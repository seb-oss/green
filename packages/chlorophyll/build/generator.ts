const rxShadePrefix = /^s\d{3}$/
const handleShadePrefix = (key: string): string => {
  if (rxShadePrefix.test(key)) return key.substring(1)
  else return key
}

export const generate = (obj: any, ...prefix: string[]): string[] => (
  Object.entries(obj)
    .flatMap(([key, value]) => {
      const prefixes = prefix.concat(handleShadePrefix(key))

      if (typeof value === 'object') return generate(value, ...prefixes)
      return `$${prefixes.join('-')}: ${value};`
    })
)
