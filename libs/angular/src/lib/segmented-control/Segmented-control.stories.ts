// Segmented-controls.stories.ts

import { Meta } from '@storybook/angular/types-6-0'
import { NggSegmentedControlComponent } from './segmented-control.component'
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular'
import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { of } from 'rxjs'

// eslint-disable-next-line
import { OptionAComponent } from '../../../../../apps/angular-lib-dev/src/app/segmented-control/option-a/option-a.component'
// eslint-disable-next-line
import { OptionBComponent } from '../../../../../apps/angular-lib-dev/src/app/segmented-control/option-b/option-b.component'

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
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, RouterModule.forRoot(routes)],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `${story}<router-outlet></router-outlet>`
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
