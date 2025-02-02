import { CommonModule } from '@angular/common'
import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  importProvidersFrom,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TranslocoLoader, TranslocoModule } from '@jsverse/transloco'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'
import { of } from 'rxjs'

import { NggCoreWrapperModule } from '../../lib/shared'
import { NggvI18nModule } from '../i18n'
import { PaginationComponent } from './pagination.component'

class TranslocoInlineLoader implements TranslocoLoader {
  getTranslation(_: string) {
    return of({
      'label.gotopage': 'Go to page',
    })
  }
}

export default {
  title: 'V-Angular/Pagination',
  component: PaginationComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NggvI18nModule)],
    }),
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule,
        NggvI18nModule,
        TranslocoModule,
        NggCoreWrapperModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }),
  ],
} as Meta

const Template: StoryFn<PaginationComponent> = (args) => ({
  props: args,
})

export const NumberNavigation = Template.bind({})
NumberNavigation.args = {
  size: 100,
  value: 1,
  offset: 10,
  pagingLength: 5,
  showGoToPage: true,
  useFirstAndLast: true,
}

export const DotNavigation = Template.bind({})
DotNavigation.args = {
  size: 100,
  value: 1,
  offset: 10,
  pagingLength: 5,
  useDotNav: true,
}
