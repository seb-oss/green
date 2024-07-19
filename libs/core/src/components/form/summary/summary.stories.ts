import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'

import '../../datepicker/index.ts'
import '../../dropdown/index.ts'
import '../../icon/icons/rocket.ts'

import * as themeTransStyles from '../../theme/theme.trans.styles.ts'
import * as ddTransStyles from '../../dropdown/dropdown.trans.styles.ts'
import * as dpTransStyles from '../../datepicker/datepicker.trans.styles.ts'
themeTransStyles.register()
ddTransStyles.register()
dpTransStyles.register()

/**
 * [Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/form/summary)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/component-errorsummary)
 *
 *
 * When a user attempts to submit a form with errors, this component displays a summary of those errors.
 * Including an error summary greatly assists users in promptly identifying and addressing multiple errors
 * in a consolidated manner. It provides a clear indication of what went wrong and what needs to be corrected.
 *
 * Each form component that contains an error is listed as a row, displaying the name of the field and
 * linking it to the corresponding form element.
 */
const meta: Meta = {
  title: 'Docs/Form validation/Summary',
  component: 'gds-form-summary',
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
    controls: { expanded: true },
  },
}

/**
 * To use the `gds-form-summary` component, simply place it inside a form element.
 *
 * The suammry component will automatically detect any form elements with validation errors and display them.
 */
export const Usage: Story = {
  ...DefaultParams,
  render: (args) =>
    html`<form style="width: 450px">
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
      <gds-container margin="s 0 s">
        <gds-form-summary></gds-form-summary>
      </gds-container>
      <gds-button type="submit">
        Launch
        <gds-icon-rocket slot="trail"></gds-icon-rocket>
      </gds-button>
      <gds-button type="reset">Reset</gds-button>
    </form>`,
}
