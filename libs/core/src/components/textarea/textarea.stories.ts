import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'
import '../badge/index.ts'
import '../layout/flex/index.ts'
import '../content/divider/index.ts'
import '../icon/icons/credit-card.ts'
import '../icon/icons/magnifying-glass.ts'

/**
 *
 * @status beta
 *
 * Input fields allow users to enter text into a UI. They typically appear in forms and dialogs.
 */
const meta: Meta = {
  title: 'Docs/Components/Form/Textarea',
  component: 'gds-textarea',
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
  },
}

export const All: Story = {
  ...DefaultParams,
  name: 'All',
  render: () => html`
    <gds-flex flex-direction="column" gap="2xl" width="800px">
      <gds-flex gap="xl">
        <gds-textarea
          value="test"
          label="Rows"
          supporting-text="Label support text"
          rows="8"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
        <gds-textarea
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
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
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
        </gds-textarea>
        <gds-textarea
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
        </gds-textarea>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          disabled
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Small</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          size="small"
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          size="small"
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Validation</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
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
        </gds-textarea>
        <gds-textarea
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
        </gds-textarea>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Disabled</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
        <gds-textarea
          label="Label"
          size="small"
          disabled
          supporting-text="Label support text"
          value=" "
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>

      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text>Search & Badge</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>

      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          clearable
        >
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Input"
          clearable
        >
          <gds-badge variant="information" slot="trail">KR</gds-badge>
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          .invalid="${true}"
          supporting-text="Label support text"
        >
          <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
        </gds-textarea>
        <gds-textarea
          label="Label"
          .invalid="${true}"
          supporting-text="Label support text"
          value="Input"
          clearable
        >
          <gds-badge variant="negative" slot="trail">KR</gds-badge>
        </gds-textarea>
      </gds-flex>
      <gds-flex padding="xl 0 0 0" flex-direction="column">
        <gds-text tag="h2">Textarea</gds-text>
        <gds-divider></gds-divider>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
        >
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=${true}
        >
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          maxlength="140"
          .invalid=${true}
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          show-extended-supporting-text
          maxlength="140"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * Minimum number of rows to display in the textarea is `4` by default. <br>
 * You can specify the number of rows to display in the textarea using the `rows` attribute.
 *
 * @property rows - The number of rows to display in the textarea.
 **/
export const Rows: Story = {
  ...DefaultParams,
  name: 'Rows',
  render: () => html`
  <gds-flex width="400px">
      <gds-textarea
        value="Textarea demo value"
        label="Rows"
        supporting-text="Label support text"
        rows="8"
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
    </gds-flex
  `,
}
