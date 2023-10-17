import { Meta, moduleMetadata, Story } from '@storybook/angular'

import { NggStackedTableComponent } from './stacked-table.component'
import { NggStackedTableModule } from './stacked-table.module'
import Documentation from './documentation.mdx'
const tmp = [
  {
    "rowId": 0,
    "FullName": "<a class='ps-3' href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt='country flag'><span>ABB Ltd</span></a>",
    "PreLastTradedAt": 397.30,
    "ChangePercent": "−1,39%",
    "Change": 5,
  },
  {
    "rowId": 1,
    "FullName": "<a class='ps-3' href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt='country flag'><span>H&M</span></a>",
    "PreLastTradedAt": 200.30,
    "ChangePercent": "−1,39%",
    "Change": 5,
  },
  {
    "rowId": 2,
    "FullName": "<a class='ps-3' href='#/sv/security/17921/ABB'><img class='pe-3 d-inline' src='https://content.seb.se/ssc/channels/savings-investments/financial-market-intra/assets/flags/se.svg' alt='country flag'><span>SBB</span></a>",
    "PreLastTradedAt": 100.30,
    "ChangePercent": "−1,39%",
    "Change": 5,
  },
]

export default {
  title: 'Components/Stacked Table',
  component: NggStackedTableComponent,
  decorators: [
    moduleMetadata({
      imports: [NggStackedTableModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
    componentIds: ['components-stacked-table'],
  },
  argTypes: {
    rows: { control: 'object' },
    headerList: { control: 'object' },
    className: { control: 'string' },
    arrow: { control: 'boolean' }
  },
} as Meta<NggStackedTableComponent>;

const Template: Story<NggStackedTableComponent> = (args: NggStackedTableComponent) => {
  return {
    template: `
      <ngg-stacked-table [rows]="rows" [headerList]="headerList" [className]="className" [arrow]="arrow">
      </ngg-stacked-table>
    `,
    props: args,
  };
};

export const Default = Template.bind({});
Default.args = {
  rows: tmp,
  className: "stack-table-container d-block stacked-stock-list stacked-indent",
  headerList: [
    {
      "tableKeySelector": "FullName",
      "label": "Namn",
      "valueType": "custom-html",
      "main": true,
    },
    {
      "tableKeySelector": "PreLastTradedAt",
      "label": "Senast",
      "valueType": "streamSign",
    },
    {
      "tableKeySelector": "ChangePercent",
      "label": "Utv. %",
      "valueType": "sign",
    },
    {
      "tableKeySelector": "Change",
      "label": "Utv. (SEK)",
      "valueType": "sign",
    },
  ],
  arrow: true
};