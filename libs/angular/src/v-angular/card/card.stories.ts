import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'
import { CardComponent } from './card.component'

export default {
  title: 'V-Angular/Card',
  component: CardComponent,
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

const BasicTemplate: StoryFn<CardComponent> = () => ({
  template: /*html*/ `
    <ngv-card>
      Basic card
    </ngv-card>`,
})

const TemplateWithColumns: StoryFn<CardComponent> = () => ({
  template: /*html*/ `
    <ngv-card>
      <div class="card-row">
        <div class="card-column"> Column 1 </div>
        <div class="card-column"> Column 2 </div>
        <div class="card-column"> Column 3 </div>
        <div class="card-column"> Column 4 </div>
      </div>
    </ngv-card>`,
})

const TemplateWithDivider: StoryFn<CardComponent> = () => ({
  template: /*html*/ `
    <ngv-card>
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
    </ngv-card>`,
})

export const Basic = BasicTemplate.bind({})

export const WithColumns = TemplateWithColumns.bind({})

export const Divider = TemplateWithDivider.bind({})
