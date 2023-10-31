import Modal, { ModalProps } from './modal'
import { Meta, Story } from '@storybook/react/types-6-0'
import { useArgs } from '@storybook/client-api'

const Template: Story<ModalProps> = (props) => {
  const [{ isOpen }, updateArgs] = useArgs()
  const handleClose = () => updateArgs({ isOpen: false })

  const openModal = () => {
    updateArgs({ isOpen: true })
  }
  const onConfirm = () => {
    console.log('ok clicked')
  }

  const Styles = () => (
    <style>
      {`
          main {
            position: relative !important;
            max-height: 500px;
            max-width: 100%;
          }
          section {
            position: relative !important;
            margin: auto;
            max-height: 300px;
          }
          aside {
            position: relative !important;
            max-height: 500px;
            margin-left: auto;
          }
          .backdrop {
            position: absolute;
            margin-bottom: 1.5rem;
          }
         
      `}
    </style>
  )

  return (
    <div>
      <Styles />
      {!isOpen && (
        <button className="button" onClick={openModal}>
          open modal
        </button>
      )}
      <Modal
        {...props}
        onClose={handleClose}
        isOpen={isOpen}
        onConfirm={onConfirm}
      />
    </div>
  )
}

export const ModalDefault: Story<ModalProps> = Template.bind({})
ModalDefault.args = {
  type: 'default',
  header: 'Default Modal',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
}

export const SlideOutSmall: Story<ModalProps> = Template.bind({})
SlideOutSmall.args = {
  type: 'slideout',
  header: 'SlideOut Modal',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
  size: 'sm'
}

export const SlideOutMedium: Story<ModalProps> = Template.bind({})
SlideOutMedium.args = {
  type: 'slideout',
  header: 'SlideOut Modal',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
  size: 'md'
}

export const SlideOutLarge: Story<ModalProps> = Template.bind({})
SlideOutLarge.args = {
  type: 'slideout',
  header: 'SlideOut Modal',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
  size: 'lg'
}

export const TakeOver: Story<ModalProps> = Template.bind({})
TakeOver.args = {
  type: 'takeover',
  header: 'TakeOver Modal',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
}

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    componentIds: ['component-dialogue', 'component-slideout', 'component-foldout', 'component-takeover'],
  }
} as Meta
