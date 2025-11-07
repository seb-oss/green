import {
  GdsBadge,
  GdsButton,
  GdsCard,
  GdsContextMenu,
  GdsDivider,
  GdsDropdown,
  GdsFlex,
  GdsImg,
  GdsInput,
  GdsLink,
  GdsMenuItem,
  GdsPagination,
  GdsText,
  IconCopy,
  IconCrossSmall,
  IconDotGridOneHorizontal,
  IconMagnifyingGlass,
  IconSort,
  IconSortDown,
  IconSortUp,
} from '../../pure'
import { GdsTableCheckbox } from './table.checkbox'

export {
  accountsFormats as FormatAccount,
  dateTimeFormats as FormatDate,
  numberFormats as FormatNumber,
} from '../formatted-text/formatters'

export { TableStyles as Styles } from './table.styles'
export { tokens as Tokens } from '../../tokens.style'

export const Dependencies = [
  GdsTableCheckbox,
  GdsButton,
  GdsCard,
  GdsDivider,
  GdsImg,
  GdsContextMenu,
  GdsMenuItem,
  GdsDropdown,
  GdsInput,
  GdsPagination,
  GdsText,
  GdsBadge,
  GdsLink,
  GdsFlex,
  IconCopy,
  IconCrossSmall,
  IconMagnifyingGlass,
  IconSort,
  IconSortDown,
  IconSortUp,
  IconDotGridOneHorizontal,
]
