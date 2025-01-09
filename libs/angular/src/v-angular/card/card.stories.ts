import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { NggvCardComponent } from './card.component'

export default {
  title: 'V-Angular/Card',
  component: NggvCardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 20rem">${story}</div>`,
    ),
  ],
} as Meta

const BasicTemplate: StoryFn<NggvCardComponent> = () => ({
  template: /*html*/ `
    <nggv-card>
      Basic card
    </nggv-card>`,
})

const TemplateWithColumns: StoryFn<NggvCardComponent> = () => ({
  template: /*html*/ `
    <nggv-card>
      <div class="card-row">
        <div class="card-column"> Column 1 </div>
        <div class="card-column"> Column 2 </div>
        <div class="card-column"> Column 3 </div>
        <div class="card-column"> Column 4 </div>
      </div>
    </nggv-card>`,
})

const TemplateWithDivider: StoryFn<NggvCardComponent> = () => ({
  template: /*html*/ `
    <nggv-card>
      <div class="card-row">
        <div class="card-column"> <b>Expenses</b> </div>
        <div class="card-column"></div>
      </div>
      <div class="card-row">
        <div class="card-column"> Food </div>
        <div class="card-column"> 11,00 € </div>
      </div>
      <div class="card-row">
        <div class="card-column"> Bus tickets </div>
        <div class="card-column"> 22,00 € </div>
      </div>
      <div class="card-row divider">
        <div class="card-column"> Sum </div>
        <div class="card-column"> 33,00 € </div>
      </div>
    </nggv-card>`,
})

export const Basic = BasicTemplate.bind({})

export const WithColumns = TemplateWithColumns.bind({})

export const Divider = TemplateWithDivider.bind({})
