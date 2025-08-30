// color.types.ts
export interface ColorValue {
  $value: string
  alpha?: number
  $type?: string
}

export interface ColorToken {
  name: string
  lightValue: ColorValue
  darkValue: ColorValue
  category: string
  subCategory?: string
}

export interface ColorSubGroup {
  category: string
  tokens: ColorToken[]
}

export interface ColorGroup {
  title: string
  tokens: ColorToken[] | ColorSubGroup[]
  hasSubGroups?: boolean
}
