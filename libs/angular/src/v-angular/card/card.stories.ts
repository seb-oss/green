import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggvCardComponent } from './card.component'

const meta: Meta<NggvCardComponent> = {
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
}

export default meta
type Story = StoryObj<NggvCardComponent>

export const Basic: Story = {
  render: () => ({
    template: /*html*/ `
    <nggv-card>
      Basic card
    </nggv-card>`,
  }),
}

export const WithColumns: Story = {
  render: () => ({
    template: /*html*/ `
    <nggv-card>
      <div class="card-row">
        <div class="card-column"> Column 1 </div>
        <div class="card-column"> Column 2 </div>
        <div class="card-column"> Column 3 </div>
        <div class="card-column"> Column 4 </div>
      </div>
    </nggv-card>`,
  }),
}

export const Divider: Story = {
  render: () => ({
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
  }),
}
