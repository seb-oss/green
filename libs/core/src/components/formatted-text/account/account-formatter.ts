export type AccountFormats = keyof typeof accountsFormats

type AccountFormatter = (value?: number | string) => string

export const accountsFormats = {
  'seb-account': (value) => {
    const account =
      typeof value === 'string'
        ? value.replace(' ', '')
        : (value?.toString() ?? '')

    if (account.length !== 11) {
      return account
    }

    return `${account.slice(0, 4)} ${account.slice(4, 6)} ${account.slice(6, 9)} ${account.slice(9, 11)}`
  },
} satisfies Record<string, AccountFormatter>
