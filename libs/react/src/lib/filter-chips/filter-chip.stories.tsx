import { FilterChip, FilterChips } from './filter-chips'

const Template = ({ children, ...props }) => (
  <FilterChips {...props}>{children}</FilterChips>
)

export default {
  title: 'Components/Filter Chips',
  component: FilterChips,
}

export const Default = {
  render: Template.bind({}),
  name: 'Filter Chips',

  parameters: {
    componentIds: ['component-filterchips'],
  },

  args: {
    children: [
      <FilterChip value="all">All</FilterChip>,
      <FilterChip value="top-news">Top news</FilterChip>,
      <FilterChip value="division">Division</FilterChip>,
      <FilterChip value="global">Global</FilterChip>,
      <FilterChip value="country">Country</FilterChip>,
      <FilterChip value="lcfi">
        Large Corporate & Financial Institutions
      </FilterChip>,
    ],
  },
}
