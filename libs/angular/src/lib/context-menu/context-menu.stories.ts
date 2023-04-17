import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { NggContextMenuComponent} from './context-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

export default {
  title: 'Components/Context Menu',
  component: NggContextMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [NggContextMenuComponent],
      imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
    }),
  ],
} as Meta<NggContextMenuComponent>;

// Template for the component
const Template: Story<NggContextMenuComponent> = (args: NggContextMenuComponent) => ({
  component: NggContextMenuComponent,
  props: args,
  template: `
  <div style="position: relative;">
    <button (contextmenu)="ctx.open($event)">Right-click me</button>
    <ngg-context-menu #ctx [menuItems]="menuItems" [menuItemTemplate]="menuItemTemplate" (itemClicked)="onItemClick($event)"></ngg-context-menu>
  </div>
  `,
});

// Define the args for the stories
export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
};