/* eslint-disable no-console */
import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import { applicationConfig, moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggvExternalLinkDirective } from '@sebgroup/green-angular/src/v-angular/external-link'
import { ButtonStyle, NggvButtonComponent } from './button.component'

interface StoryClickable {
  clickAction: (event: Event) => void
  text: string
}

const getButtonText = (type: ButtonStyle): string => {
  return `${ButtonStyle[type]} button`
}

const meta: Meta<NggvButtonComponent & StoryClickable> = {
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
}

export default meta
type Story = StoryObj<NggvButtonComponent & StoryClickable>

export const Primary: Story = {
  render: (args: any) => ({
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
  }),
  args: {
    buttonStyle: ButtonStyle.Primary,
    text: getButtonText(ButtonStyle.Primary),
    small: false,
    clickAction: console.log,
  },
}

export const Secondary: Story = {
  render: (args: any) => ({
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
  }),
  args: {
    ...Primary.args,
    buttonStyle: ButtonStyle.Secondary,
    text: getButtonText(ButtonStyle.Secondary),
  },
}

export const Alternative: Story = {
  render: (args: any) => ({
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
  }),
  args: {
    ...Primary.args,
    buttonStyle: ButtonStyle.Alternative,
    text: getButtonText(ButtonStyle.Alternative),
  },
}

export const Delete: Story = {
  render: (args: any) => ({
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
  }),
  args: {
    ...Primary.args,
    buttonStyle: ButtonStyle.Delete,
    text: getButtonText(ButtonStyle.Delete),
  },
}

export const DeleteConfirm: Story = {
  render: (args: any) => ({
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
  }),
  args: {
    ...Primary.args,
    buttonStyle: ButtonStyle.DeleteConfirm,
    text: getButtonText(ButtonStyle.DeleteConfirm),
  },
}

export const Ghost: Story = {
  render: (args: any) => ({
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
  }),
  args: {
    ...Primary.args,
    buttonStyle: ButtonStyle.Ghost,
    text: getButtonText(ButtonStyle.Ghost),
  },
}

export const GhostDark: Story = {
  render: (args: any) => ({
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
  }),
  args: {
    ...Primary.args,
    buttonStyle: ButtonStyle.GhostDark,
    text: getButtonText(ButtonStyle.GhostDark),
  },
}

export const Link: Story = {
  render: (args: any) => ({
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
  }),
  args: {
    ...Primary.args,
    type: 'link',
    href: 'https://seb.se',
    buttonStyle: ButtonStyle.Link,
    text: getButtonText(ButtonStyle.Link),
  },
}
