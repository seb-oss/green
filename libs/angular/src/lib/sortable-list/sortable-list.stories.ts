import { Meta, moduleMetadata, Story } from '@storybook/angular'
import {
  SortableListItem,
  NggSortableListComponent,
} from './sortable-list.component'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DragDropModule } from '@angular/cdk/drag-drop'
import Documentation from './documentation.mdx'

export default {
  title: 'Components/SortableList',
  component: NggSortableListComponent,
  parameters: {
    docs: {
      page: Documentation,
    },
    componentIds: ['sortable-list'],
  },
  decorators: [
    moduleMetadata({
      declarations: [NggSortableListComponent],
      imports: [CommonModule, BrowserAnimationsModule, DragDropModule],
    }),
  ],
  argTypes: {
    items: {
      name: 'items',
      description: 'Array of items to be displayed in the checklist.',
      control: {
        type: 'object',
      },
    },
    isReadOnly: {
      name: 'isReadOnly',
      description: 'If true, items cannot be reordered or selected.',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    shouldDisplayDragHandle: {
      name: 'shouldDisplayDragHandle',
      description: 'Whether to display drag handles on each item.',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    isDraggable: {
      name: 'isDraggable',
      description: 'If true, allows items to be reordered.',
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    header: {
      name: 'header',
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    subtitle: {
      name: 'subtitle',
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    description: {
      name: 'description',
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    suffixTemplate: {
      name: 'suffixTemplate',
      description: 'Custom template for displaying suffixes.',
      control: {
        type: 'none',
      },
    },
  },
} as Meta<NggSortableListComponent>

const createTemplate = (
  suffixTemplate: boolean = false
): Story<NggSortableListComponent> => {
  return (args: NggSortableListComponent) => ({
    template: `
      ${
        suffixTemplate
          ? '<ng-template #customTemplate><span>🐞🚀 LGTM!</span></ng-template>'
          : ''
      }
      <ngg-sortable-list [items]="items"
                              [isReadOnly]="isReadOnly"
                              [isDraggable]="isDraggable"
                              [shouldDisplayDragHandle]="shouldDisplayDragHandle"
                              [shouldDisplaySeparateUncheckedList] = "shouldDisplaySeparateUncheckedList"
                              [unselectedHeader]="unselectedHeader"
                              [unselectedSubtitle]="unselectedSubtitle"
                              [unselectedDescription]="unselectedDescription"
                              [shouldDisplayCheckboxes]="shouldDisplayCheckboxes"
                              [header]="header"
                              [subtitle]="subtitle"
                              [description]="description"
                              [suffixTemplate]="customTemplate"
                              (itemSelectionChanged)="onItemSelected($event)"
                              (itemOrderChanged)="onItemOrderChanged($event)">
      </ngg-sortable-list>
    `,
    props: {
      ...args,
      onItemSelected,
      onItemOrderChanged,
    },
  })
}

const onItemSelected = (
  changedItem: SortableListItem,
  items: SortableListItem[]
) => {
  console.log('Updated item:', changedItem, items)
}

const onItemOrderChanged = (event: {
  previousIndex: number
  currentIndex: number
  items: SortableListItem[]
}) => {
  console.log('Item order changed: ', event)
}

export const Default = createTemplate().bind({})
Default.args = {
  header: 'Sortable List',
  subtitle: 'The list that moves! (Subtitle)',
  description: 'My plan for next week! (Description)',
  items: [
    {
      id: 1,
      name: 'Debugging Marathon Session',
      selected: true,
      hasCustomSuffix: true,
      description: 'Where coffee is your best debugger.',
    },
    {
      id: 2,
      name: 'Refactor the Legacy Codebase',
      selected: false,
      description:
        '"Surely deleting this unused variable won\'t cause any issues in production."',
      hasCustomSuffix: false,
    },
    {
      id: 3,
      name: 'Surviving Code Reviews',
      selected: true,
      description: 'Remember to breathe and think of kittens.',
      hasCustomSuffix: true,
    },
    {
      id: 4,
      name: 'Deployment Day Dilemmas',
      selected: true,
      description: 'Will it work? Flip a coin.',
      hasCustomSuffix: false,
    },
    {
      id: 5,
      name: 'Planning the Unrealistic Deadline',
      selected: false,
      description: 'Time travel theories welcome.',
      hasCustomSuffix: true,
    },
    {
      id: 6,
      name: 'Brainstorming the Next Big App',
      selected: false,
      description: 'Let’s add blockchain and AI for good measure!',
      hasCustomSuffix: false,
    },
    {
      id: 7,
      name: 'Choosing the New JavaScript Framework',
      selected: true,
      description: 'Just pick one, we’ll change it next month anyway.',
      hasCustomSuffix: false,
    },
    {
      id: 8,
      name: 'Argue Over Tabs vs Spaces',
      selected: true,
      description: '01010100 01100001 01100010 01110011 00100001',
      hasCustomSuffix: false,
    },
    {
      id: 9,
      name: 'Fixing Production Issues',
      selected: true,
      description: 'Also known as "How is this even working?"',
      hasCustomSuffix: true,
    },
  ],
  isReadOnly: false,
  isDraggable: true,
}

export const WithCustomTemplate = createTemplate(true).bind({})
WithCustomTemplate.args = {
  ...Default.args,
}
WithCustomTemplate.storyName = 'With Custom suffix template'
WithCustomTemplate.parameters = {
  docs: {
    storyDescription: 'Display a custom suffix to highlight certain items',
  },
}

export const DefaultSortableChecklist = createTemplate().bind({})
DefaultSortableChecklist.args = {
  ...Default.args,
  shouldDisplayCheckboxes: true,
}
DefaultSortableChecklist.storyName = 'Separate Unchecked List'

export const ReadOnly = createTemplate().bind({})
ReadOnly.args = {
  ...DefaultSortableChecklist.args,
  isReadOnly: true,
}

export const NotDraggable = createTemplate().bind({})
NotDraggable.args = {
  ...DefaultSortableChecklist.args,
  isDraggable: false,
}
NotDraggable.storyName = 'Disabled reordering and displaying drag handle'

export const Minimal = createTemplate().bind({})
Minimal.args = {
  header: 'Minimal Checklist',
  subtitle: 'Simplified and Streamlined',
  description: '',
  items: [
    { id: 1, name: 'Simple', selected: false, hasCustomSuffix: false },
    { id: 2, name: 'Yet', selected: true, hasCustomSuffix: false },
    { id: 3, name: 'Elegant', selected: false, hasCustomSuffix: false },
  ],
  shouldDisplayCheckboxes: true,
}
