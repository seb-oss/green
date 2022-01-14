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

  return (
    <div style={{ height: '180px' }}>
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

export const SlideOut: Story<ModalProps> = Template.bind({})
SlideOut.args = {
  type: 'slideout',
  header: 'SlideOut Modal',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
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
} as Meta
