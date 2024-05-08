// Segmented-controls.stories.ts

import { Meta } from '@storybook/angular'
import { NggSegmentedControlComponent } from './segmented-control.component'
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular'
import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { of } from 'rxjs'
import { Component } from '@angular/core'

@Component({
  template: ` <p class="mt-4">Option A</p> `,
})
class OptionAComponent {}

@Component({
  template: ` <p class="mt-4">Option B</p> `,
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

export default {
  title: 'Components/Segmented control',
  component: NggSegmentedControlComponent,
  parameters: {
    componentIds: ['component-segmented-control'],
  },
  decorators: [
    moduleMetadata({
      declarations: [OptionAComponent, OptionBComponent],
      imports: [CommonModule, RouterModule.forRoot(routes)],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `${story}<router-outlet></router-outlet>`,
    ),
  ],
} as Meta

export const WithRouter = () => ({
  props: {
    $controls: of([
      { text: 'Option A', url: '/option-a' },
      { text: 'Option B', url: '/option-b' },
    ]),
  },
})
