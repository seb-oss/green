/* eslint-disable no-console */
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  importProvidersFrom,
} from '@angular/core'
// import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faTimes } from '@fortawesome/pro-light-svg-icons';
// import { faCheck, faCloudUpload } from '@fortawesome/pro-regular-svg-icons';
import {
  Translation,
  TranslocoLoader,
  TranslocoModule,
} from '@jsverse/transloco'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { NggCoreWrapperModule } from '../../lib/shared'
import { NggvI18nModule } from '../i18n'
import { NggvModalModule } from '../modal'
import { NggvDragDropComponent } from './drag-drop.component'
import { MockFileService, mockStateMap } from './drag-drop.mock'
import { ValuePipe } from './drag-drop.pipes'

class TranslocoInlineLoader implements TranslocoLoader {
  getTranslation(lang: string) {
    return import(`./i18n/${lang}.json`).then((translation: Translation) =>
      // Extend keys with scope prefix for testing in storybook
      Object.fromEntries(
        Object.entries(translation).map(([key, value]) => [
          `dragDrop.${key}`,
          value,
        ]),
      ),
    )
  }
}

export default {
  title: 'V-Angular/Drag Drop',
  component: NggvDragDropComponent,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NggvI18nModule)],
    }),
    moduleMetadata({
      declarations: [ValuePipe],
      imports: [
        CommonModule,
        HttpClientModule,
        TranslocoModule,
        NggvModalModule,
        NggCoreWrapperModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
} as Meta

const Template: StoryFn<NggvDragDropComponent> = (args) => ({
  props: { ...args },
})

export const Primary = Template.bind({})
Primary.args = {
  service: new MockFileService(),
  disableRemove: [],
  stateMap: mockStateMap,
  stateChange: console.log as any,
}

export const NoList = Template.bind({})
NoList.args = {
  service: new MockFileService(),
  list: false,
  stateMap: mockStateMap,
  stateChange: console.log as any,
}

export const NoValidation = Template.bind({})
NoValidation.args = {
  service: new MockFileService(false),
  disableRemove: ['done'],
  stateMap: { ...mockStateMap, validating: [], done: 'received' },
  stateChange: console.log as any,
}

export const ResumeValidation = Template.bind({})
ResumeValidation.args = {
  service: new MockFileService(true, true),
  disableRemove: ['done'],
  stateMap: mockStateMap,
  stateChange: console.log as any,
}

export const RandomFailure = Template.bind({})
RandomFailure.args = {
  service: new MockFileService(true, false, true),
  stateMap: mockStateMap,
  stateChange: console.log as any,
  detailsClick: console.log as any,
}
