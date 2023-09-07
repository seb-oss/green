import { ReactNode } from 'react'

export type FormDirection = 'horizontal' | 'vertical'

export interface IExpandableInformation {
  expandableInfo?: ReactNode
  expandableInfoButtonLabel?: string
}

export interface ILabelAndLabelInformation {
  label?: string
  labelInformation?: ReactNode
}
