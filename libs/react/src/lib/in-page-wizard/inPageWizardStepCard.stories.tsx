import React from 'react'

import { TextInput } from '../form/input/input'
import { TextArea } from '../form/textarea/textarea'
import { GroupedList, ListItem } from '../grouped-list'
import { IconArrowDown } from '../icon/icons/IconArrowDown'
import { IconCheckmark } from '../icon/icons/IconCheckmark'
import {
  InPageWizardStepCard,
  InPageWizardStepCardProps,
} from './inPageWizardStepCard'

const Template = ({ children, ...props }: InPageWizardStepCardProps) => (
  <InPageWizardStepCard {...props}>{children}</InPageWizardStepCard>
)

export default {
  title: 'Components/InPageWizardStepCard',
  component: InPageWizardStepCard,
}

export const Default = {
  render: Template.bind({}),
  name: 'InPageWizardStepCard',

  args: {
    children: 'Active step default content.',
    nextBtnText: 'Next',
    stepStatus: 'IsActive',
    stepText: 'Active step default text',
    title: 'Active step default title',
  },
}

export const NextButtonText = Template.bind({})
NextButtonText.args = {
  children: 'Active step textcontent.',
  nextBtnText: 'My next button text',
  stepStatus: 'IsActive',
  stepText: 'Active step text text',
  title: 'Active step text title',
}

export const NextButtonIcon = Template.bind({})
NextButtonIcon.args = {
  children: 'Active step icon content.',
  nextBtnText: 'Next',
  nextBtnIcon: <IconCheckmark />,
  stepStatus: 'IsActive',
  stepText: 'Active step icon text',
  title: 'Active step icon title',
}

export const NextButtonIconAlt = Template.bind({})
NextButtonIconAlt.args = {
  children: 'Active step alt icon content.',
  nextBtnText: 'Next',
  nextBtnIcon: <IconArrowDown />,
  stepStatus: 'IsActive',
  stepText: 'Active step alt icon text',
  title: 'Active step alt icon title',
}


export const HiddenFooter = Template.bind({})
HiddenFooter.args = {
  children: 'Active step hidden footer content.',
  nextBtnText: 'Next',
  nextBtnIcon: <IconCheckmark />,
  stepStatus: 'IsActive',
  stepText: 'Active step hidden footer text',
  title: 'Active step hidden footer title',
  hideFooter: true,
}

export const EditText = Template.bind({})
EditText.args = {
  children: 'Completed step edit button content.',
  nextBtnText: 'Next',
  editBtnText: 'Redigera',
  stepStatus: 'IsComplete',
  stepText: 'Completed step edit button text',
  title: 'Completed step edit button title',
}

export const Status = ({ children, ...props }) => (
  <div>
    <InPageWizardStepCard
      editBtnText="Edit"
      nextBtnText="Nästa"
      stepStatus="IsComplete"
      stepText="Step 1 of 3"
      title="Completed step"
    >
      Content of Step 1
    </InPageWizardStepCard>

    <InPageWizardStepCard
      editBtnText="Edit"
      nextBtnText="Next"
      stepStatus="IsActive"
      stepText="Step 2 of 3"
      title="Active step"
    >
      Content of Step 2
    </InPageWizardStepCard>

    <InPageWizardStepCard
      editBtnText="Edit"
      nextBtnText="Nästa"
      stepStatus="NotStarted"
      stepText="Step 3 of 3"
      title="Not started step"
    >
      Content of Step 3
    </InPageWizardStepCard>
  </div>
)

export const Example = ({ children, ...props }) => (
  <div>
    <InPageWizardStepCard
      editBtnText="Edit"
      nextBtnText="Nästa"
      stepStatus="IsComplete"
      stepText="Step 1 of 3"
      title="Completed step"
    >
      <GroupedList>
        <ListItem
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            padding: '.5rem 1rem',
          }}
        >
          <div>
            <b style={{ fontWeight: '500' }}>Summary key</b>
          </div>

          <div>Summary value</div>
        </ListItem>

        <ListItem
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            padding: '.5rem 1rem',
          }}
        >
          <div>
            <b style={{ fontWeight: '500' }}>Summary key</b>
          </div>

          <div>Summary value</div>
        </ListItem>

        <ListItem
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            padding: '.5rem 1rem',
          }}
        >
          <div>
            <b style={{ fontWeight: '500' }}>Summary key</b>
          </div>

          <div>Summary value</div>
        </ListItem>
      </GroupedList>
    </InPageWizardStepCard>

    <InPageWizardStepCard
      editBtnText="Edit"
      nextBtnText="Next"
      stepStatus="IsActive"
      stepText="Step 2 of 3"
      title="Active step"
    >
      <TextInput label="Input 1" />

      <TextInput label="Input 2" />

      <TextArea label="Text area" />
    </InPageWizardStepCard>

    <InPageWizardStepCard
      editBtnText="Edit"
      nextBtnText="Nästa"
      stepStatus="NotStarted"
      stepText="Step 3 of 3"
      title="Not started step"
    >
      Content of Step 3
    </InPageWizardStepCard>
  </div>
)
