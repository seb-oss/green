import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'
import '../badge'
import '../layout/flex'
import '../icon/icons/credit-card.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/input)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://seb.io/component/input)
 *
 * @status beta
 *
 * Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.
 */
const meta: Meta = {
  title: 'Docs/Components/Form/Input',
  component: 'gds-input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: {
      expanded: true,
    },
  },
  args: {
    label: 'Label text',
    multiline: false,
  },
}

export const Basic: Story = {
  ...DefaultParams,
  name: 'Variant: Default',
}

export const Simplified: Story = {
  ...DefaultParams,
  name: 'Variant: Simplified',
  args: {
    label: 'Simplified',
    variant: 'simplified',
  },
}

export const Lead: Story = {
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Lead Icon">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `,
}

export const Trail: Story = {
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Trail Badge" variant="default">
        <gds-badge variant="information" slot="trail">KR</gds-badge>
      </gds-input>
    </gds-flex>
  `,
}

export const Length: Story = {
  ...DefaultParams,
  name: 'Length',
  args: {
    maxlength: 20,
  },
}

export const Clearable: Story = {
  ...DefaultParams,
  name: 'Clearable',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input label="Label text" clearable></gds-input>
    </gds-flex>
  `,
}

export const SupportingText: Story = {
  ...DefaultParams,
  name: 'Supporting Text',
  args: {
    label: 'Label',
    supportingText: 'Supporting text',
  },
}

export const ExtendedSupportingText: Story = {
  ...DefaultParams,
  render: () => html`
    <gds-flex flex-direction="column" gap="xl">
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
        variant="default"
      >
        <span slot="message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.</span
        >
      </gds-input>
    </gds-flex>
  `,
}

// export const ExtendedSupportingText: Story = {
//   ...DefaultParams,
//   render: () => html`
//     <gds-flex flex-direction="column" gap="xl">
//       <gds-input
//         label="Label text"
//         supporting-text="Supporting text"
//         show-extended-supporting-text
//         maxLength="20"
//         variant="default"
//       >
//         <span slot="lead">LEAD</span>
//         <gds-badge slot="trail">TRAIL</gds-badge>
//         <span slot="message">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
//           ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua.</span
//         >
//       </gds-input>
//       <gds-input
//         label="Label text"
//         supporting-text="Supporting text"
//         show-extended-supporting-text
//         maxLength="20"
//         variant="simplified"
//         multiline
//       >
//         <span slot="message">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
//           ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua.
//         </span>
//       </gds-input>

//       <gds-input
//         label="default "
//         supporting-text="Supporting text"
//         show-extended-supporting-text
//         maxLength="20"
//         variant="default"
//       >
//         <div slot="message">...
//         </span>
//       </gds-input>

//     </gds-flex>
//   `,
// }
