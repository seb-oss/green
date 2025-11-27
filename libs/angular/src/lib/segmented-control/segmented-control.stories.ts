// Segmented-controls.stories.ts

import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { Component, importProvidersFrom } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular'
import { of } from 'rxjs'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggSegmentedControlComponent } from './segmented-control.component'

@Component({
  template: ` <p class="mt-4">Option A</p> `,
  standalone: false,
})
class OptionAComponent {}

@Component({
  template: ` <p class="mt-4">Option B</p> `,
  standalone: false,
})
class OptionBComponent {}

const routes: Routes = [
  {
    path: 'option-a',
    component: OptionAComponent,
  },
  {
    path: 'option-b',
    component: OptionBComponent,
  },
]

const meta: Meta = {
  title: 'Components/Segmented control',
  component: NggSegmentedControlComponent,
  parameters: {
    componentIds: ['component-segmented-control'],
  },
  decorators: [
    moduleMetadata({
      declarations: [OptionAComponent, OptionBComponent],
      imports: [CommonModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom(RouterModule.forRoot([]))],
    }),
    componentWrapperDecorator(
      (story) => `${story}<router-outlet></router-outlet>`,
    ),
  ],
}

export default meta
type Story = StoryObj

export const WithRouter: Story = {
  render: () => ({
    props: {
      $controls: of([
        { text: 'Option A', url: '/option-a' },
        { text: 'Option B', url: '/option-b' },
      ]),
    },
  }),
}
