export interface IRadioGroupItem {
  id: string
  label: string
  value: any
  description?: string
  disabled?: boolean
  selected?: boolean
  customClassNames: Array<string>
}
