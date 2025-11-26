import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggContextMenuComponent } from './context-menu.component'
import { NggContextMenuModule } from './context-menu.module'

const meta: Meta<NggContextMenuComponent> = {
  title: 'Components/Context Menu',
  component: NggContextMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        NggContextMenuModule,
      ],
    }),
  ],
  parameters: {
    componentIds: ['component-context-menu'],
  },
}

export default meta
type Story = StoryObj<NggContextMenuComponent>

export const Default: Story = {
  render: (args) => ({
    component: NggContextMenuComponent,
    props: args,
    template: `
  <div style="display:flex;justify-content:space-between">
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
  </div>
  `,
  }),
  args: {
    direction: 'ltr',
    menuItems: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
}

export const WithLabel: Story = {
  render: (args) => ({
    component: NggContextMenuComponent,
    props: args,
    template: `
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [menuAnchorTemplate]="menuAnchorTemplate">
    </ngg-context-menu>

    <ng-template #menuAnchorTemplate>
        Menu
        <i class="sg-icon sg-icon-ellipsis"></i>
    </ng-template>
    `,
  }),
  args: {
    direction: 'rtl',
    menuItems: [
      { label: 'Key 1', value: 'option1' },
      { label: 'Key 2', value: 'option2' },
      { label: 'Key 3', value: 'option3' },
    ],
  },
}

export const RightToLeft: Story = {
  render: (args) => ({
    component: NggContextMenuComponent,
    props: args,
    template: `
  <div style="display:flex;justify-content:space-between">
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
  </div>
  `,
  }),
  args: {
    direction: 'rtl',
    menuItems: [
      { label: 'Key 1', value: 'option1' },
      { label: 'Key 2', value: 'option2' },
      { label: 'Key 3', value: 'option3' },
    ],
  },
}

export const CustomTemplateDefault: Story = {
  render: (args) => ({
    component: NggContextMenuComponent,
    props: args,
    template: `
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [menuItemTemplate]="menuItemTemplate" [menuAnchorTemplate]="menuAnchorTemplate">
    </ngg-context-menu>

    <ng-template #menuAnchorTemplate>
      <div>
        <span>Click me!</span>
      </div>
    </ng-template>

    <ng-template #menuItemTemplate let-menuItem>
      <div
        style="display: flex; justify-content: space-between; align-items: center; min-width: 7rem;"
        [style.color]="(menuItem.value === 'delete') ? '#9F000A' : 'inherit'"
      >
        {{ menuItem.label }}
        <svg *ngIf="menuItem.value === 'delete'" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z" fill="#9F000A"/>
        </svg>
      </div>
    </ng-template>
    `,
  }),
  args: {
    direction: 'rtl',
    menuItems: [
      { label: 'Key 1', value: 'option1' },
      { label: 'Key 2', value: 'option2' },
      { label: 'Delete', value: 'delete' },
    ],
  },
}

export const PositionRelative: Story = {
  render: (args) => ({
    component: NggContextMenuComponent,
    props: args,
    template: `
  <div style="position: relative; width: 50%; margin: 20px auto;">
    <div style="display:flex;justify-content:space-between;">
      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
    </div>
  </div>
  `,
  }),
  args: {
    direction: 'ltr',
    menuItems: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
}
