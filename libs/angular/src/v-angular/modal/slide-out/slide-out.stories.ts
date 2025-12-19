/* eslint-disable no-console */
import { CommonModule } from '@angular/common'
import { importProvidersFrom } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { applicationConfig, moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { DropdownUtils } from '../../core'
import { NggvDropdownModule } from '../../dropdown/dropdown.module'
import { NggvI18nModule } from '../../i18n/i18n.module'
import { NggvSlideOutComponent } from './slide-out.component'

interface WithExtras {
  action: (val: any) => void
  outsideContent: boolean
}

const meta: Meta<NggvSlideOutComponent & WithExtras> = {
  title: 'V-Angular/Slide Out',
  component: NggvSlideOutComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NggvI18nModule), DropdownUtils],
    }),
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        NggvI18nModule,
        NggCoreWrapperModule,
        NggvDropdownModule,
      ],
    }),
  ],
  argTypes: {
    side: {
      options: ['left', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    action: {
      table: {
        disable: true,
      },
    },
    outsideContent: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<NggvSlideOutComponent & WithExtras>

const options = [
  { key: 'opt1', label: 'label.defaultlabel', accountNumber: '345345' },
  { key: 'opt6', label: 'HÖR LUR TJO HEJ KOTLETT' },
  {
    key: 'opt2',
    label:
      'This is a very long label that should over flow a smaller dropdown button',
  },
  { key: 'opt3', label: 'Option 3 - disabled', disabled: true },
  { key: 'opt4', label: 'Option 4' },
  {
    key: 'opt5',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
  },
  {
    label: 'Group',
    options: [
      { key: 'group-opt1', label: null, accountNumber: '3453245' },
      { key: 'group-opt2', label: 'Option 2' },
      { key: 'group-opt3', label: 'Option 3' },
      { key: 'group-opt4', label: 'Option 4' },
    ],
  },
]
const dropdownArgs = {
  required: false,
  invalid: false,
  label: 'Field label',
  placeholder: 'Placeholder text',
  description: 'This. Is. A. Description.',
  ngModel: 'opt2',
  options,
}

export const Primary: Story = {
  render: (args: any) => ({
    template: /* html */ `
    <nggv-slideout-modal #slideOut
      [initiallyShown]="initiallyShown"
      [closable]="closable"
      [content]="content"
      [title]="title"
      [buttons]="buttons"
      [side]="side"
      [autoWidth]="autoWidth"
      (nggvCloseEvent)="action($event)"
      >
      <p *ngIf="!outsideContent && !autoWidth">
        Some content in the content div:
        <nggv-dropdown [required]="required"
          [invalid]="invalid"
          [label]="label"
          [placeholder]="placeholder"
          [description]="description"
          [ngModel]="ngModel"
          [options]="options">
        </nggv-dropdown>
      </p>
      <div *ngIf="outsideContent" slot="outside-content" [ngStyle]="{ 'background': 'black', 'color': 'white', 'padding': '1rem' }">
        This is the slotted content. This can be used in the (rare) case of content that needs
        to take up space outside the well-padded modal content div.
        <nggv-dropdown [required]="required"
          [invalid]="invalid"
          [label]="label"
          [placeholder]="placeholder"
          [description]="description"
          [ngModel]="ngModel"
          [options]="options">
        </nggv-dropdown>
      </div>
      <div *ngIf="autoWidth" slot="outside-content" [ngStyle]="{ 'background': 'green', 'color': 'white', 'padding': '1rem', 'width': '50vw' }">
        This is a modal with extra wide content.
      </div>
    </nggv-slideout-modal>
    <button class="gds-button" (click)="slideOut.open()">Open slide-out</button>
    `,
    props: args,
  }),
  args: {
    initiallyShown: true,
    autoWidth: false,
    closable: true,
    buttons: {
      negative: 'button_cancel',
      neutral: 'button_apply',
      positive: 'button_save',
    },
    side: 'right',
    title: 'Modal title',
    content: 'Some content in the content div.\n\nSupports line breaks',
    ...dropdownArgs,
    action: ((closed: boolean) => console.log('is closed?', closed)) as any,
  },
}

export const WithSlottedContent: Story = {
  render: Primary.render,
  args: {
    ...Primary.args,
    title: 'Modal title for with slotted content',
    outsideContent: true,
  },
}

export const WithAutoWidthEnabled: Story = {
  render: Primary.render,
  args: {
    ...Primary.args,
    title: 'Modal title for wider modal',
    autoWidth: true,
  },
}
