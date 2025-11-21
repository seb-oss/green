import './input-mask.globals'

import { CommonModule } from '@angular/common'
import { Component, importProvidersFrom } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms'
import { applicationConfig, moduleMetadata } from '@storybook/angular'

// import { NggvI18nModule } from '@sebgroup/nggv-i18n';
import type { Meta, StoryObj } from '@storybook/angular'

import { createMask } from './constants'
import { NggvInputMaskModule } from './input-mask.module'

interface WithExtras {
  notice: string
  tooltip?: string
  info?: string
  text?: string
  ngModel: string
}

@Component({
  selector: 'nggv-input-mask-story',
  template: `
    <div class="container">
      <div class="row">
        <div class="column">
          <label class="story-label">
            Date
            <input
              [nggvInputMask]="dateInputMask"
              [formControl]="dateFC"
              placeholder="dd/mm/yyyy"
            />
          </label>
          <!--div>Valid: {{ dateFC.valid }}</div>
        <div>Value: {{ dateFC.value }}</div>
        <div>Errors: {{ dateFC.errors }}</div-->
        </div>

        <div class="column">
          <label class="story-label">
            E-mail
            <input
              [nggvInputMask]="emailInputMask"
              [formControl]="emailFC"
              placeholder="_@_._"
            />
          </label>
          <!--div>Valid: {{ emailFC.valid }}</div>
        <div>Value: {{ emailFC.value }}</div>
        <div>Errors: {{ emailFC.errors }}</div-->
        </div>

        <div class="column">
          <label class="story-label">
            Currency
            <input
              [nggvInputMask]="currencyInputMask"
              [formControl]="currencyFC"
              placeholder="$ 0.00"
            />
          </label>
          <!--div>Valid: {{ currencyFC.valid }}</div>
        <div>Value: {{ currencyFC.value }}</div>
        <div>Errors: {{ currencyFC.errors }}</div-->
        </div>

        <div class="column">
          <label class="story-label">
            License
            <input
              [nggvInputMask]="licenseInputMask"
              [formControl]="licenseFC"
              placeholder="___-___"
            />
          </label>
          <!--div>Valid: {{ licenseFC.valid }}</div>
        <div>Value: {{ licenseFC.value }}</div>
        <div>Errors: {{ licenseFC.errors }}</div-->
        </div>

        <div class="column">
          <label class="story-label">
            IP address
            <input
              [nggvInputMask]="ipAddressMask"
              [formControl]="ipFC"
              placeholder="_._._._"
            />
          </label>
          <!--div>Valid: {{ ipFC.valid }}</div>
        <div>Value: {{ ipFC.value }}</div>
        <div>Errors: {{ ipFC.errors }}</div-->
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      * {
        box-sizing: border-box;
        width: 100%;
      }

      .story-label {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 2rem;
      }

      .column {
        float: left;
        width: 33.33%;
        padding: 10px;
        min-height: 100px;
        max-height: 300px;
      }

      .row:after {
        content: '';
        display: table;
        clear: both;
      }
    `,
  ],
  standalone: false,
})
class NggvInputMaskStoryComponent {
  dateFC = new UntypedFormControl('')
  dateInputMask = createMask<Date>({
    alias: 'datetime',
    inputFormat: 'dd/mm/yyyy',
    parser: (value: string) => {
      const values = value.split('/')
      const year = +values[2]
      const month = +values[1] - 1
      const day = +values[0]
      return new Date(year, month, day)
    },
  })

  emailFC = new UntypedFormControl('')
  emailInputMask = createMask({ alias: 'email' })

  currencyFC = new UntypedFormControl('')
  currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    digits: 2,
    digitsOptional: false,
    prefix: '$ ',
    placeholder: '0',
  })

  licenseFC = new UntypedFormControl('')
  licenseInputMask = createMask('[9-]AAA-999')

  ipFC = new UntypedFormControl('')
  ipAddressMask = createMask({ alias: 'ip' })
}

const meta: Meta<NggvInputMaskStoryComponent> = {
  title: 'V-Angular/Input mask',
  component: NggvInputMaskStoryComponent,
  decorators: [
    applicationConfig({
      providers: [
        // importProvidersFrom(NggvI18nModule),
        importProvidersFrom(NggvInputMaskModule.forRoot({ isAsync: true })),
      ],
    }),
    moduleMetadata({
      declarations: [NggvInputMaskStoryComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NggvInputMaskModule,
      ],
    }),
  ],
}

export default meta
type Story = StoryObj<NggvInputMaskStoryComponent>

export const Primary: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {},
}
