import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { NggvExternalLinkDirective } from '../external-link/external-link.directive'
import { NggvBreadcrumbsComponent } from './breadcrumbs.component'

export default {
  title: 'V-Angular/Breadcrumbs',
  component: NggvBreadcrumbsComponent,
  decorators: [
    applicationConfig({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      declarations: [NggvExternalLinkDirective],
    }),
  ],
} as Meta

const Template: StoryFn<NggvBreadcrumbsComponent> = (
  args: NggvBreadcrumbsComponent,
) => ({
  template: /*html*/ `<nggv-breadcrumbs [breadcrumbs]="breadcrumbs"></nggv-breadcrumbs>`,
  props: args,
})

const breadcrumbs = [
  { title: 'Home', href: '#' },
  { title: 'Liquidity', href: '#' },
  { title: 'Accounts', href: '#' },
  { title: 'Payments', href: '#' },
  { title: 'Initiate', href: '#' },
]

export const Primary = Template.bind({})
Primary.args = {
  breadcrumbs,
}
