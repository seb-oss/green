import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Meta, Story, moduleMetadata } from '@storybook/angular'
import { NggContextMenuComponent } from './context-menu.component'

export default {
  title: 'Components/Context Menu',
  component: NggContextMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [NggContextMenuComponent],
      imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
    }),
  ],
} as Meta<NggContextMenuComponent>

// Template for the component
const Template: Story<NggContextMenuComponent> = (
  args: NggContextMenuComponent
) => ({
  component: NggContextMenuComponent,
  props: args,
  template: `
  <ngg-context-menu #ctx [menuItems]="menuItems" (itemClicked)="onItemClick($event)"></ngg-context-menu>
  `,
})

export const Default = Template.bind({})
Default.args = {
  menuItems: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
}
