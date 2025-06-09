import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'
import '../datepicker/index.ts'
import '../dropdown/index.ts'
import '../input/index.ts'
import '../icon/icons/rocket.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/form-summary)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)
 *
 * Form summary shows all form errors in one place.
 */
const meta: Meta = {
  title: 'Components/Form summary',
  component: 'gds-form-summary',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-form-summary'),
  },
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

/**
 * To use the `gds-form-summary` component, simply place it inside a form element.
 *
 * In this example we're using a reactive form summary below the form controls. The `reactive` attribute makes the summary
 * update automatically as the user interacts with the form.
 */
export const Usage: Story = {
  ...DefaultParams,
  render: (args) =>
    html`<form style="width: 450px" novalidate>
      <gds-card
        display="flex"
        flex-direction="column"
        gap="m"
        variant="secondary"
        border-color="primary"
      >
        <gds-text tag="h2">Launch control</gds-text>
        <gds-dropdown
          label="Astronaut"
          .validator=${{
            validate: (el: any) => {
              if (el.value !== 'cat')
                return [
                  { ...el.validity, valid: false, customError: true },
                  el.value === undefined
                    ? 'An astronaut is required'
                    : 'Only cats can pilot rockets!',
                ]
            },
          }}
        >
          <gds-option>Pick your astronaut</gds-option>
          <gds-option value="dog">Dog</gds-option>
          <gds-option value="cat">Cat</gds-option>
          <gds-option value="fish">Fish</gds-option>
        </gds-dropdown>
        <gds-datepicker
          label="Launch date"
          .validator=${{
            validate: (el: any) => {
              if (el.value === undefined)
                return [
                  { ...el.validity, valid: false, customError: true },
                  'A date is required',
                ]
            },
          }}
        ></gds-datepicker>
        <gds-input
          label="Designation"
          .validator=${{
            validate: (el: any) => {
              if (el.value === '')
                return [
                  { ...el.validity, valid: false, customError: true },
                  'A designation is required',
                ]
            },
          }}
        ></gds-input>
        <gds-form-summary reactive></gds-form-summary>
        <gds-flex gap="m" justify-content="center" margin="s 0 0 0">
          <gds-button type="reset" rank="tertiary">Reset</gds-button>
          <gds-button type="submit">
            Launch
            <gds-icon-rocket slot="trail"></gds-icon-rocket>
          </gds-button>
        </gds-flex>
      </gds-card>
    </form>`,
}

/**
 * The `gds-form-summary` component can also be used in a non-reactive way.
 * In this example, the summary is placed above the form controls and
 * is updated manually when the user clicks the "Submit" button.
 */
export const ManualUpdate: Story = {
  ...DefaultParams,
  render: (args) =>
    html`<form style="width: 450px" novalidate>
      <gds-form-summary id="summary"></gds-form-summary>
      <gds-flex flex-direction="column" gap="m" align-items="start">
        <gds-input
          label="Designation"
          .validator=${{
            validate: (el: any) => {
              if (el.value === '')
                return [
                  { ...el.validity, valid: false, customError: true },
                  'A designation is required',
                ]
            },
          }}
        ></gds-input>
        <gds-button
          type="submit"
          onclick="document.getElementById('summary').refresh()"
          >Submit</gds-button
        >
      </gds-flex>
    </form> `,
}

/**
 * `gds-form-summary` can also be used with native controls by specifying label and error message as data attributes on the control.
 * Any control that has `aria-invalid` set to `true` will be included in the summary.
 */
export const NativeControls: Story = {
  ...DefaultParams,
  render: (args) =>
    html`<form style="width: 450px">
      <gds-flex flex-direction="column" gap="m">
        <label for="designation">Designation</label>
        <input
          id="designation"
          type="text"
          aria-invalid="true"
          data-label="Designation"
          data-errormessage="A designation is required"
          required
        />
        <gds-form-summary id="summary"></gds-form-summary>
      </gds-flex>
    </form> `,
}
