/* eslint-disable no-console */
import { APP_BASE_HREF, CommonModule } from '@angular/common'
import { Component, importProvidersFrom } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TranslocoModule } from '@jsverse/transloco'
import { applicationConfig, moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggvI18nModule } from '../i18n'
import { TabDirective } from './tab.directive'
import { TabsComponent } from './tabs.component'

const genDummy = (content: string, link: number) =>
  Component({
    selector: 'app-dummy',
    styles: [`:host { margin-top: 1rem }`],
    template: `
      <p>${content} with <a routerLink="/tab${link}">Link to Tab ${link}</a></p>
    `,
  })(class DummyComponent {})

const routes = [
  { path: 'tab1', component: genDummy('Dummy Tab 1', 2) },
  { path: 'tab2', component: genDummy('Dummy Tab 2', 3) },
  { path: 'tab3', component: genDummy('Dummy Tab 3', 4) },
  { path: 'tab4', component: genDummy('Dummy Tab 4', 1) },
]

const meta: Meta<TabsComponent> = {
  title: 'V-Angular/Tabs',
  component: TabsComponent,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(NggvI18nModule),
        { provide: APP_BASE_HREF, useValue: '/' },
        importProvidersFrom(RouterModule.forRoot(routes, { useHash: true })),
      ],
    }),
    moduleMetadata({
      declarations: [TabDirective, ...routes.map(({ component }) => component)],
      imports: [CommonModule, TranslocoModule, RouterModule],
    }),
  ],
}

export default meta
type Story = StoryObj<TabsComponent>

const argsToAttr = (args: any) =>
  Object.keys(args)
    .map((attr) =>
      attr.startsWith('on') || attr.startsWith('ngv')
        ? `(${attr})="${attr}($event)"`
        : `[${attr}]="${attr}"`,
    )
    .join(' ')

export const Primary: Story = {
  render: (args) => ({
    template: /* html */ `
  <nggv-tabs ${argsToAttr(args)}>
    <article tab="Tab 1">Occaecati enim provident. Et ut ratione. Est laborum enim possimus rerum et nesciunt.</article>
    <article tab="Tab 2" id="two" [active]="true">Praesentium autem quos eos enim doloribus quis cupiditate repudiandae labore. Harum commodi cumque maiores perspiciatis et. Vitae voluptas aspernatur aut perferendis debitis nam voluptatem velit.</article>
    <article tab="Tab 3" [disabled]="true"></article>
    <article tab="Tab <strong>4</strong>">Quibusdam eius voluptatem porro et totam qui odio nulla autem. Possimus vitae quisquam et totam natus magnam. Repellendus iusto maiores mollitia sunt neque et dolore eaque.</article>
  </nggv-tabs>
  `,
    props: args,
  }),
  args: {
    tabs: [],
    ngvTabSwitch: console.log as any,
  },
}

export const Routed: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    tabs: [
      { tab: 'Tab 1', link: 'tab1' },
      { tab: 'Tab 2', link: 'tab2' },
      { tab: 'Tab 3', link: 'tab3', disabled: true },
      { tab: 'Tab <strong>4</strong>', link: 'tab4' },
    ],
    ngvTabSwitch: console.log as any,
  },
}
