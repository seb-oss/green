import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'

import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { NgvExternalLinkDirective } from '../external-link/external-link.directive'
import { NgvBreadcrumbsComponent } from './breadcrumbs.component'

export default {
  title: 'V-Angular/Breadcrumbs',
  component: NgvBreadcrumbsComponent,
  decorators: [
    applicationConfig({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      declarations: [NgvExternalLinkDirective],
    }),
  ],
} as Meta

const Template: StoryFn<NgvBreadcrumbsComponent> = (
  args: NgvBreadcrumbsComponent,
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
