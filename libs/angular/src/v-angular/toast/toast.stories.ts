import { CommonModule } from '@angular/common'
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  importProvidersFrom,
} from '@angular/core'
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations'
import {
  applicationConfig,
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

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
    </button>`,
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
}

export default {
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
} as Meta

const Template: StoryFn<ToastComponent> = (args) => ({
  props: args,
})

export const Primary = Template.bind({})
