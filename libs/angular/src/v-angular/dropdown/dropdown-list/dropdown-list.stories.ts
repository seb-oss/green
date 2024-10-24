import { CommonModule } from '@angular/common'
import { importProvidersFrom } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { NgvI18nModule } from '../../i18n/i18n.module'
import { NgvInputComponent } from '../../input/input.component'
import { NgvTooltipDirective } from '../../tooltip/tooltip.directive'
import { NgvDropdownListComponent } from './dropdown-list.component'

interface WithExtras {
  ngModel: string
  ngModelChange: (event: Event) => void
  toggleOptions: any
  getOptions: any
  onSelectedValueChanged: (event: Event) => void
  keyUp: KeyboardEvent
}

export default {
  title: 'V-Angular/DropdownList',
  component: NgvDropdownListComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NgvI18nModule)],
    }),
    moduleMetadata({
      declarations: [NgvInputComponent, NgvTooltipDirective],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, NgvI18nModule],
    }),
  ],
} as Meta

const options = [
  {
    key: JSON.stringify({ accountNo: '123456', type: 'pg' }),
    accountNo: '12345-6',
    type: 'pg',
    proxyId: 'string',
    name: 'Radiohjälpen',
    bicfi: 'bicno',
    label: 'Radiohjälpen: pg',
  },
  {
    key: JSON.stringify({ accountNo: '123456', type: 'bg' }),
    accountNo: '123-456',
    type: 'bg',
    proxyId: 'string',
    name: 'Radiohjälpen',
    bicfi: 'bicno',
    label: 'Radiohjälpen: bg',
  },
]

type StoryArgs = NgvDropdownListComponent & WithExtras

const Template: StoryFn<StoryArgs> = (args: any) => {
  let expanded = false
  const formControl = new UntypedFormControl()
  formControl.valueChanges.subscribe()
  const onSelectedValueChanged = (val: any) => {
    expanded = false
    formControl.setValue(val?.accountNo)
  }
  return {
    template: /*html*/ `
      <div style="width: 264px;position: relative;">

        <nggv-input
          name="test"
          [formControl]="formControl"
          (click)="$event.stopPropagation();expanded = !expanded">
        </nggv-input>

        <nggv-dropdown-list
        style="width: 264px"
        [expanded]=expanded
        [options]=options
        (selectedValueChanged)="onSelectedValueChanged($event)">
        </nggv-dropdown-list>
      </div>`,
    props: {
      ...args,
      formControl,
      onSelectedValueChanged,
      expanded,
    },
  }
}

const primaryArgs = {
  options,
  keyUp: {},
}

export const Primary = Template.bind({}, primaryArgs as any)
