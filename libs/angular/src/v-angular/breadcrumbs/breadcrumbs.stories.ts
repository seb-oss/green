import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import { applicationConfig, moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggvExternalLinkDirective } from '../external-link/external-link.directive'
import { NggvBreadcrumbsComponent } from './breadcrumbs.component'

const meta: Meta<NggvBreadcrumbsComponent> = {
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
}

export default meta
type Story = StoryObj<NggvBreadcrumbsComponent>

const breadcrumbs = [
  { title: 'Home', href: '#' },
  { title: 'Liquidity', href: '#' },
  { title: 'Accounts', href: '#' },
  { title: 'Payments', href: '#' },
  { title: 'Initiate', href: '#' },
]

export const Primary: Story = {
  render: (args: NggvBreadcrumbsComponent) => ({
    template: /*html*/ `<nggv-breadcrumbs [breadcrumbs]="breadcrumbs"></nggv-breadcrumbs>`,
    props: args,
  }),
  args: {
    breadcrumbs,
  },
}
