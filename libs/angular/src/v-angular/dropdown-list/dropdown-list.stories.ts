import { CommonModule } from '@angular/common'
import { importProvidersFrom } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms'

import { NgvI18nModule } from '../i18n/i18n.module'
import { TooltipDirective } from '../tooltip/tooltip.directive'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { InputComponent } from '../input/input.component'
import { DropdownListComponent } from './dropdown-list.component'

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
  component: DropdownListComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NgvI18nModule)],
    }),
    moduleMetadata({
      declarations: [InputComponent, TooltipDirective],
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

type StoryArgs = DropdownListComponent & WithExtras

const Template: StoryFn<StoryArgs> = (args: StoryArgs) => {
  let expanded = false
  const formControl = new UntypedFormControl()
  formControl.valueChanges.subscribe()
  const onSelectedValueChanged = (val: any) => {
    expanded = false
    formControl.setValue(val?.accountNo)
  }
  return {
    template: /*html*/ `
      <div style="width: 264px">
  
        <ngg-input style="position: relative; overflow: hidden"
          name="test"
          [formControl]="formControl"
          (click)="$event.stopPropagation();expanded = !expanded">
        </ngg-input>
  
        <ngv-dropdown-list
        style="width: 264px"
        [expanded]=expanded
        [options]=options
        (selectedValueChanged)="onSelectedValueChanged($event)">
        </ngv-dropdown-list>
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
} as StoryArgs

export const Primary = Template.bind({}, primaryArgs)
