import { CommonModule } from '@angular/common'
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  importProvidersFrom,
  TemplateRef,
} from '@angular/core'
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations'
import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggCoreWrapperModule } from '../../lib/shared'
import { NggvI18nModule } from '../i18n'
import { ToastComponent, ToastMessageService } from './index'
import { MessageType } from './toast.models'

@Component({
  selector: 'nggv-toast-story',
  template: `<nggv-toast> </nggv-toast>
    <button (click)="addMessage(MessageType.Success, '', 'Sucesss')">
      Success
    </button>
    <button
      (click)="addMessage(MessageType.Error, '', 'Error', 'Error body text')"
    >
      Error
    </button>
    <button (click)="addMessage(MessageType.Warning, '', 'Warning')">
      Warning
    </button>
    <button (click)="addMessage(MessageType.Information, '', 'Information')">
      Information
    </button>
    <ng-template #customToast>
      Custom content with <a href="#">Link!</a>
    </ng-template>
    <button (click)="addCustomMessage(customToast)">Custom content</button>`,
  standalone: false,
})
class NggvToastStoryComponent {
  constructor(public toastMessageService: ToastMessageService) {}

  MessageType = MessageType

  addMessage(
    messageType: MessageType,
    translocoScope: string,
    titleText: string,
    bodyText?: string,
    timeout?: number,
  ) {
    this.toastMessageService.addMessage(
      messageType,
      translocoScope,
      titleText,
      bodyText,
      timeout,
    )
  }

  addCustomMessage(template: TemplateRef<any>) {
    this.toastMessageService.add({
      template,
      type: MessageType.Information,
    })
  }
}

const meta: Meta<NggvToastStoryComponent> = {
  title: 'V-Angular/Toast',
  component: NggvToastStoryComponent,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    applicationConfig({
      providers: [provideAnimations(), importProvidersFrom(NggvI18nModule)],
    }),
    moduleMetadata({
      declarations: [ToastComponent],
      imports: [
        CommonModule,
        NggvI18nModule,
        NggCoreWrapperModule,
        BrowserAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
    componentWrapperDecorator(
      (story) => `<div style="height:10rem">${story}</div>`,
    ),
  ],
}

export default meta
type Story = StoryObj<ToastComponent>

export const Primary: Story = {
  render: (args) => ({
    props: args,
  }),
}
