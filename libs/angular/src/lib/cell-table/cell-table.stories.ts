import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggCellTableComponent } from './cell-table.component'
import { NggCellTableModule } from './cell-table.module'

const tmp = [
  {
    rowId: 0,
    FullName:
      "<a href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt=''><span>ABB Ltd</span></a>",
    PreLastTradedAt: 397.3,
    ChangePercent: '−1,39%',
    Change: 5,
  },
  {
    rowId: 1,
    FullName:
      "<a href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt=''><span>H&M</span></a>",
    PreLastTradedAt: 200.3,
    ChangePercent: '−1,39%',
    Change: 5,
  },
  {
    rowId: 2,
    FullName:
      "<a href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt=''><span>SBB</span></a>",
    PreLastTradedAt: 100.3,
    ChangePercent: '−1,39%',
    Change: 5,
  },
]

const meta: Meta<NggCellTableComponent> = {
  title: 'Components/Cell Table',
  component: NggCellTableComponent,
  decorators: [
    moduleMetadata({
      imports: [NggCellTableModule],
    }),
  ],
  parameters: {
    componentIds: ['components-cell-table'],
  },
  argTypes: {
    rows: { control: 'object' },
    headerList: { control: 'object' },
    className: { control: 'text' },
    clickableRows: { control: 'boolean' },
    clickLabel: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<NggCellTableComponent>

export const Default: Story = {
  render: (args) => ({
    template: `
      <ngg-cell-table [rows]="rows" [headerList]="headerList" [className]="className" [clickableRows]="clickableRows" [clickLabel]="clickLabel">
      </ngg-cell-table>
    `,
    props: args,
  }),
  args: {
    rows: tmp,
    className: 'cell-table-container d-block stacked-stock-list stacked-indent',
    headerList: [
      {
        tableKeySelector: 'FullName',
        label: 'Namn',
        valueType: 'custom-html',
        main: true,
      },
      {
        tableKeySelector: 'PreLastTradedAt',
        label: 'Senast',
        valueType: 'streamSign',
      },
      {
        tableKeySelector: 'ChangePercent',
        label: 'Utv. %',
        valueType: 'sign',
      },
      {
        tableKeySelector: 'Change',
        label: 'Utv. (SEK)',
        valueType: 'sign',
      },
    ],
    clickableRows: true,
    clickLabel: 'View details',
  },
}
