import { CommonModule } from '@angular/common'
import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  importProvidersFrom,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TranslocoLoader, TranslocoModule } from '@jsverse/transloco'
import { applicationConfig, moduleMetadata } from '@storybook/angular'
import { of } from 'rxjs'

import type { Meta, StoryObj } from '@storybook/angular'

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

const meta: Meta<PaginationComponent> = {
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
}

export default meta
type Story = StoryObj<PaginationComponent>

export const NumberNavigation: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    size: 100,
    value: 1,
    offset: 10,
    pagingLength: 5,
    showGoToPage: true,
    useFirstAndLast: true,
  },
}

export const DotNavigation: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    size: 100,
    value: 1,
    offset: 10,
    pagingLength: 5,
    useDotNav: true,
  },
}
