import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'

import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { ExternalLinkDirective } from '../../lib/shared/external-link/external-link.directive'
import { BreadcrumbsComponent } from './breadcrumbs.component'

export default {
  title: 'V-Angular/Breadcrumbs',
  component: BreadcrumbsComponent,
  decorators: [
    applicationConfig({
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      declarations: [ExternalLinkDirective],
    }),
  ],
} as Meta

const Template: StoryFn<BreadcrumbsComponent> = (
  args: BreadcrumbsComponent,
) => ({
  template: /*html*/ `<ngv-breadcrumbs [breadcrumbs]="breadcrumbs"></ngv-breadcrumbs>`,
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
