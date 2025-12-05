import {
  GdsBadge,
  GdsButton,
  GdsCard,
  GdsContextMenu,
  GdsDropdown,
  GdsFlex,
  GdsImg,
  GdsInput,
  GdsLink,
  GdsMenuItem,
  GdsText,
  IconCopy,
  IconCrossSmall,
  IconDotGridOneHorizontal,
  IconMagnifyingGlass,
  IconMinusSmall,
  IconSort,
  IconSortDown,
  IconSortUp,
} from '../../pure'
import checkboxStyles from '../../shared-styles/rbcb-toggle.style'
import { tokens } from '../../tokens.style'
import { GdsPagination } from '../pagination/pagination.component'
import { TableStyles } from './table.styles'

export { checkboxToggle as Checkbox } from '../../shared-styles/rbcb-toggle.template'

export {
  accountsFormats as FormatAccount,
  dateTimeFormats as FormatDate,
  numberFormats as FormatNumber,
} from '../formatted-text/formatters'

export const Styles = [tokens, checkboxStyles, TableStyles]

export const Dependencies = [
  GdsButton,
  GdsCard,
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
  IconMinusSmall,
  IconMagnifyingGlass,
  IconSort,
  IconSortDown,
  IconSortUp,
  IconDotGridOneHorizontal,
]
