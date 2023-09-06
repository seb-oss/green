import { ReactNode } from 'react'

export type FormDirection = 'horizontal' | 'vertical'

export interface IExpandableInformation {
  expandableInfo?: ReactNode
  expandableInfoButtonLabel?: string
}

export interface ILableAndLableInformation {
  label?: string
  labelInformation?: ReactNode
}
