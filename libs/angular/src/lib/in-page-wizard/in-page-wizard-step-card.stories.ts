import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'

import { NggInPageWizardStepCardComponent } from './in-page-wizard-step-card.component'
import { NggInPageWizardModule } from './in-page-wizard.module'

export default {
  title: 'Components/Wizard/In page wizard step card',
  component: NggInPageWizardStepCardComponent,
  decorators: [
    moduleMetadata({
      imports: [NggInPageWizardModule],
    }),
  ],
  argTypes: {},
  parameters: {
    controls: { isActive: true, isCompleted: true, disableNext: false },
    componentIds: ['component-inpagewizard'],
  },
} as Meta<NggInPageWizardStepCardComponent>

const Template: StoryFn<NggInPageWizardStepCardComponent> = (args) => {
  const noop = () => {
    return
  }
  return {
    template: `
    <ngg-in-page-wizard-step-card
      stepText="Step 1 of 2"
      title="Step title"
      editBtnText="Edit"
      nextBtnText="Next"
      [isActive]="!!isActive"
      [isCompleted]="!!isCompleted"
      [disableNext]="!!disableNext"
      (handleEditClick)="noop()"
      (handleNextClick)="isCompleted = true;"
    >
    <div *ngIf="!isCompleted">
      <label for="textInput">Input label</label>
      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>
      <input id="textInput" type="text"/>
    </div>
    <div *ngIf="!!isCompleted">
      <p class="mb-5">Input after completed</p>
    </div>
    </ngg-in-page-wizard-step-card>
  `,
    props: {
      ...args,
      noop,
    },
  }
}

export const Default = Template.bind({})
Default.args = {
  isActive: true,
  isCompleted: false,
  disableNext: false,
}

export const DisableNext = Template.bind({})
DisableNext.args = {
  isActive: true,
  isCompleted: false,
  disableNext: true,
}

const TemplateMultiple: StoryFn<NggInPageWizardStepCardComponent> = (args) => {
  const noop = () => {
    return
  }
  return {
    template: `
  <ngg-in-page-wizard-step-card
  stepText="Step 1 of 3"
  title="Step 1 completed"
  editBtnText="Edit"
  nextBtnText="Next"
  [isActive]="false"
  [isCompleted]="true"
  [disableNext]="false"
  (handleNextClick)="noop()"
  (handleEditClick)="noop()"

>
  <div>
      <label for="textInput">Input label</label>
      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>
      <input id="textInput" type="text" />
    </div>
  </ngg-in-page-wizard-step-card>
  <ngg-in-page-wizard-step-card
  stepText="Step 2 of 3"
  title="Step 2 active"
  editBtnText="Edit"
  nextBtnText="Next"
  [isActive]="true"
  [isCompleted]="false"
  [disableNext]="false"
  (handleNextClick)="noop()"
  (handleEditClick)="noop()"
>
  <div>
      <label for="textInput">Input label</label>
      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>
      <input id="textInput" type="text" />
    </div>
  </ngg-in-page-wizard-step-card>
   <ngg-in-page-wizard-step-card
  stepText="Step 3 of 3"
  title="Step 3 upcoming"
  editBtnText="Edit"
  nextBtnText="Next"
  [isActive]="false"
  [isCompleted]="false"
  [disableNext]="false"
  (handleNextClick)="noop()"
  (handleEditClick)="noop()"
>
  <div>
      <label for="textInput">Input label</label>
      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>
      <input id="textInput" type="text" />
    </div>
  </ngg-in-page-wizard-step-card>

  `,
    props: {
      ...args,
      noop,
    },
  }
}
export const Multiple = TemplateMultiple.bind({})
Multiple.args = {}
