import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'
import '../badge'
import '../layout/flex'
import '../content/divider'
import '../icon/icons/credit-card.ts'
import '../icon/icons/magnifying-glass.ts'

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
    textarea: false,
  },
}

export const All: Story = {
  ...DefaultParams,
  name: 'All',
  render: () => html`
    <gds-flex flex-direction="column" gap="2xl" width="800px">
      <gds-flex gap="xl">
        <gds-input
          value="test"
          label="Label"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          value=" "
          .invalid=${true}
          .validator=${{
            validate: (el: any) => {
              if (el.value === '')
                return [
                  {
                    ...el.validity,
                    valid: false,
                    customError: true,
                  },
                  'Error message.',
                ]
              else if (el.value.length !== 12 || isNaN(el.value))
                return [
                  {
                    ...el.validity,
                    valid: false,
                    customError: true,
                  },
                  'The value must be 12 characters long. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                ]
            },
          }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .invalid=${true}
          .validator=${{
            validate: (el: any) => {
              if (el.value === '')
                return [
                  {
                    ...el.validity,
                    valid: false,
                    customError: true,
                  },
                  'Error message.',
                ]
              else if (el.value.length !== 12 || isNaN(el.value))
                return [
                  {
                    ...el.validity,
                    valid: false,
                    customError: true,
                  },
                  'The value must be 12 characters long.',
                ]
            },
          }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input label="Label" disabled supporting-text="Label support text">
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Small</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=${true}
          .validator=${{
            validate: (el: any) => {
              if (el.value === '')
                return [
                  {
                    ...el.validity,
                    valid: false,
                    customError: true,
                  },
                  'Error message.',
                ]
              else if (el.value.length !== 12 || isNaN(el.value))
                return [
                  {
                    ...el.validity,
                    valid: false,
                    customError: true,
                  },
                  'The value must be 12 characters long.',
                ]
            },
          }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          .invalid=${true}
          .validator=${{
            validate: (el: any) => {
              if (el.value === '')
                return [
                  {
                    ...el.validity,
                    valid: false,
                    customError: true,
                  },
                  'Error message.',
                ]
              else if (el.value.length !== 12 || isNaN(el.value))
                return [
                  {
                    ...el.validity,
                    valid: false,
                    customError: true,
                  },
                  'The value must be 12 characters long.',
                ]
            },
          }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
        <gds-input
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Search & Badge</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-input label="Label" supporting-text="Label support text" clearable>
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value="Input"
          clearable
        >
          <gds-badge variant="information" slot="trail">KR</gds-badge>
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          .invalid="${true}"
          supporting-text="Label support text"
        >
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-input>
        <gds-input
          label="Label"
          .invalid="${true}"
          supporting-text="Label support text"
          value="Input"
          clearable
        >
          <gds-badge variant="negative" slot="trail">KR</gds-badge>
        </gds-input>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Textarea</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
        >
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
        >
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=${true}
        >
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=${true}
        >
        </gds-input>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
        <gds-input
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>
      </gds-flex>
    </gds-flex>
  `,
}

// export const Basic: Story = {
//   ...DefaultParams,
//   name: 'Variant: Default',
// }

// export const Simplified: Story = {
//   ...DefaultParams,
//   name: 'Variant: Simplified',
//   args: {
//     label: 'Simplified',
//     variant: 'simplified',
//   },
// }

// export const Lead: Story = {
//   ...DefaultParams,
//   name: 'Slot: Lead',
//   render: () => html`
//     <gds-flex flex-direction="column" gap="xl">
//       <gds-input label="Lead Icon">
//         <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
//       </gds-input>
//     </gds-flex>
//   `,
// }

// export const Trail: Story = {
//   ...DefaultParams,
//   name: 'Slot: Trail',
//   render: () => html`
//     <gds-flex flex-direction="column" gap="xl">
//       <gds-input label="Trail Badge" variant="default">
//         <gds-badge variant="information" slot="trail">KR</gds-badge>
//       </gds-input>
//     </gds-flex>
//   `,
// }

// export const Length: Story = {
//   ...DefaultParams,
//   name: 'Length',
//   args: {
//     maxlength: 20,
//   },
// }

// export const Clearable: Story = {
//   ...DefaultParams,
//   name: 'Clearable',
//   render: () => html`
//     <gds-flex flex-direction="column" gap="xl">
//       <gds-input label="Label text" clearable></gds-input>
//     </gds-flex>
//   `,
// }

// export const SupportingText: Story = {
//   ...DefaultParams,
//   name: 'Supporting Text',
//   args: {
//     label: 'Label',
//     supportingText: 'Supporting text',
//   },
// }

// export const ExtendedSupportingText: Story = {
//   ...DefaultParams,
//   name: 'Extended Supporting Text',
//   render: () => html`
//     <gds-flex gap="xl">
//       <gds-input label="Label text" supporting-text="Supporting text">
//         <span slot="extended-supporting-text"
//           >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </span>
//       </gds-input>
//       <gds-input
//         label="Label text"
//         supporting-text="Supporting text"
//         show-extended-supporting-text
//       >
//         <span slot="extended-supporting-text">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </span>
//       </gds-input>
//     </gds-flex>
//   `,
// }

// export const Validation: Story = {
//   ...DefaultParams,
//   name: 'Validation',
//   render: () => html`
//     <gds-flex flex-direction="column" gap="xl">
//       <gds-input
//         label="Label text"
//         supporting-text="Make sure text is at least 12 characters long."
//         show-extended-supporting-text
//         length="12"
//         .validator=${{
//           validate: (el: any) => {
//             if (el.value === '')
//               return [
//                 {
//                   ...el.validity,
//                   valid: false,
//                   customError: true,
//                 },
//                 'Error message.',
//               ]
//             else if (el.value.length !== 12 || isNaN(el.value))
//               return [
//                 {
//                   ...el.validity,
//                   valid: false,
//                   customError: true,
//                 },
//                 'The value must be 12 characters long.',
//               ]
//           },
//         }}
//       >
//       </gds-input>
//     </gds-flex>
//   `,
// }

// export const textarea: Story = {
//   ...DefaultParams,
//   name: 'textarea',
//   args: {
//     label: 'textarea',
//     supportingText: 'Supporting text',
//     textarea: true,
//   },
// }
