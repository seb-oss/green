import { InPageWizardStepCard } from './inPageWizardStepCard'
import { GroupedList, ListItem } from '../grouped-list'
import { TextInput } from '../form/input/input.tsx'
import { TextArea } from '../form'
import { Check } from '../icons'

const Template = ({ children, ...props }) => (
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
    children: 'Active step content',
    nextBtnText: 'Next',
    stepStatus: 'IsActive',
    stepText: 'Active step text',
    title: 'Active step title',
  },
}
