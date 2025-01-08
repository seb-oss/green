const getKeyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key]

export const pick = (
  propertyArray: Array<string>,
  object: { [key: string]: unknown },
): object => {
  if (object instanceof Object) {
    return propertyArray.reduce(
      (acc: object, curr: string) => ({
        ...acc,
        [curr]: getKeyValue(object, curr),
      }),
      {},
    )
  }
  throw Error('The value for argument "object" must be an object')
}

export const orderByDescending = <T>(
  property: keyof T | string,
): ((a: any, b: any) => number) => {
  return (a: any, b: any) => {
    if (a[property] > b[property]) return -1
    if (a[property] < b[property]) return 1
    return 0
  }
}

export const orderByAscending = <T>(
  property: keyof T | string,
): ((a: any, b: any) => number) => {
  return (a: any, b: any) => {
    if (a[property] < b[property]) return -1
    if (a[property] > b[property]) return 1
    return 0
  }
}
