/* eslint-disable no-console */
import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { NggvExternalLinkDirective } from '@sebgroup/green-angular/src/v-angular/external-link'
import { ButtonStyle, NggvButtonComponent } from './button.component'

interface StoryClickable {
  clickAction: (event: Event) => void
  text: string
}

const getButtonText = (type: ButtonStyle): string => {
  return `${ButtonStyle[type]} button`
}

export default {
  title: 'V-Angular/Button',
  component: NggvButtonComponent,
  decorators: [
    applicationConfig({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      declarations: [NggvExternalLinkDirective],
    }),
  ],
  argTypes: {
    type: {
      options: ['button', 'submit', 'reset', 'link'],
      control: {
        type: 'select',
      },
    },
    buttonStyle: {
      table: {
        disable: true,
      },
    },
    clickAction: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: StoryFn<NggvButtonComponent & StoryClickable> = (
  args: any,
) => ({
  template: /*html*/ `
    <div class="button-wrapper button-wrapper--{{ text }}">
      <nggv-button
        [small]="small"
        [type]="type || 'button'"
        [href]="href"
        [disabled]="disabled"
        [buttonStyle]="buttonStyle"
        (nggvClick)="clickAction(text + ' clicked!')">
        {{ text }}
      </nggv-button>
    </div>`,
  styles: [
    `
    .button-wrapper {
      display: flex;
      justify-content: center;
      padding: 2rem 0;
    }
    .button-wrapper--Ghost {
      background-color: #673ab6;
    }
    .button-wrapper--GhostDark {
      background-color: #ffc500;
    }`,
  ],
  props: args,
})

export const Primary = Template.bind({})
Primary.args = {
  buttonStyle: ButtonStyle.Primary,
  text: getButtonText(ButtonStyle.Primary),
  small: false,
  clickAction: console.log,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  buttonStyle: ButtonStyle.Secondary,
  text: getButtonText(ButtonStyle.Secondary),
}

export const Alternative = Template.bind({})
Alternative.args = {
  ...Primary.args,
  buttonStyle: ButtonStyle.Alternative,
  text: getButtonText(ButtonStyle.Alternative),
}

export const Delete = Template.bind({})
Delete.args = {
  ...Primary.args,
  buttonStyle: ButtonStyle.Delete,
  text: getButtonText(ButtonStyle.Delete),
}

export const DeleteConfirm = Template.bind({})
DeleteConfirm.args = {
  ...Primary.args,
  buttonStyle: ButtonStyle.DeleteConfirm,
  text: getButtonText(ButtonStyle.DeleteConfirm),
}

export const Ghost = Template.bind({})
Ghost.args = {
  ...Primary.args,
  buttonStyle: ButtonStyle.Ghost,
  text: getButtonText(ButtonStyle.Ghost),
}

export const GhostDark = Template.bind({})
GhostDark.args = {
  ...Primary.args,
  buttonStyle: ButtonStyle.GhostDark,
  text: getButtonText(ButtonStyle.GhostDark),
}

export const Link = Template.bind({})
Link.args = {
  ...Primary.args,
  type: 'link',
  href: 'https://seb.se',
  buttonStyle: ButtonStyle.Link,
  text: getButtonText(ButtonStyle.Link),
}
