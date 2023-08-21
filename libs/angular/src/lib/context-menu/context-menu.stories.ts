import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Meta, Story, moduleMetadata } from '@storybook/angular'
import { NggOnScrollDirective } from '../shared/on-scroll.directive'
import { NggContextMenuComponent } from './context-menu.component'
import Documentation from './documentation.mdx'

export default {
  title: 'Components/Context Menu',
  component: NggContextMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [NggContextMenuComponent, NggOnScrollDirective],
      imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
    }),
  ],
  parameters: {
    docs: {
      page: Documentation,
    },
    componentIds: ['component-context-menu'],
  },
} as Meta<NggContextMenuComponent>

const Template: Story<NggContextMenuComponent> = (
  args: NggContextMenuComponent
) => ({
  component: NggContextMenuComponent,
  props: args,
  template: `
  <div style="display:flex;justify-content:space-between">
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>
  </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  direction: 'ltr',
  menuItems: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
}

export const RightToLeft = Template.bind({})
RightToLeft.args = {
  direction: 'rtl',
  menuItems: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
}

const CustomTemplate: Story<NggContextMenuComponent> = (
  args: NggContextMenuComponent
) => ({
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
      <div>
        <div>{{ menuItem.value }}</div>
        <div>{{ menuItem.label }}</div>
      </div>
    </ng-template>
    `,
})

export const CustomTemplateDefault = CustomTemplate.bind({})
CustomTemplateDefault.args = {
  direction: 'rtl',
  menuItems: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
}

const DirectiveTemplate: Story<NggContextMenuComponent> = (
  args: NggContextMenuComponent
) => ({
  component: NggContextMenuComponent,
  props: args,
  template: `
  <div class="row" style="height:200px;overflow:scroll;resize: both;" nggOnScroll> 
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [closeOnScroll]="closeOnScroll"></ngg-context-menu>
    <span> Lorem Ipsum </span>
    <span> Lorem Ipsum </span>
    <span> Lorem Ipsum </span>
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [closeOnScroll]="closeOnScroll"></ngg-context-menu>
    <span> Lorem Ipsum </span>
    <span> Lorem Ipsum </span>
    <span> Lorem Ipsum </span>
    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [closeOnScroll]="closeOnScroll"></ngg-context-menu>
    <span> Lorem Ipsum </span>
    <span> Lorem Ipsum </span>
    <span> Lorem Ipsum </span>
  </div>
  `,
})

export const DirectiveTemplateDefault = DirectiveTemplate.bind({})
DirectiveTemplateDefault.args = {
  direction: 'ltr',
  closeOnScroll: true,
  menuItems: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
}


const TemplatePositionRelative: Story<NggContextMenuComponent> = (
  args: NggContextMenuComponent
) => ({
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
})

export const PositionRelative = TemplatePositionRelative.bind({})
PositionRelative.args = {
  direction: 'ltr',
  menuItems: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
}