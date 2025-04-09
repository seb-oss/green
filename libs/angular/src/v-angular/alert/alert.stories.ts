/* eslint-disable no-console */
import { CommonModule } from '@angular/common'
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { AlertComponent } from './alert.component'
import { AlertType } from './alert.models'

export default {
  title: 'V-Angular/Alert',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      declarations: [AlertComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width: 800px">${story}</div>`,
    ),
  ],
} as Meta

const Template: StoryFn<AlertComponent> = (args) => ({
  template: /*html*/ `
    <nggv-alert
      [type]="type"
      [title]="title"
      [body]="body"
      [linkText]="linkText"
      [linkHref]="linkHref"
      [actionText]="actionText"
      [closable]="closable"
      (closeAlert)="onClose()"
      (clickLink)="onLink()"
      (clickAction)="onAction()"
      >
    ></nggv-alert>`,
  props: args,
})

export const Success = Template.bind({})
Success.args = {
  type: AlertType.Success,
  body: 'You logged out!',
}

export const Information = Template.bind({})
Information.args = {
  type: AlertType.Information,
  body: 'Body text starts on the same row as heading A link (optional) always ends the message, stand alone or',
  linkText: 'part of the sentence.',
  linkHref: '#',
  closable: true,
  onLink: console.log,
  onClose: console.log,
}

export const Warning = Template.bind({})
Warning.args = {
  type: AlertType.Warning,
  title: 'Can contain a heading.',
  body: 'Automated advice for this savings will stop on 9 Semptember. To continue receiving placement advice, you need to change or conform your answer.',
  actionText: 'Change or confirm',
  onAction: console.log,
}

export const Error = Template.bind({})
Error.args = {
  type: AlertType.Danger,
  title: 'We were unable to show your e-invoce.',
  body: "Try again. If it still doesn't work,",
  linkText: 'contact us.',
  linkHref: '#',
  actionText: 'Try again',
  onAction: console.log,
  onLink: console.log,
}
