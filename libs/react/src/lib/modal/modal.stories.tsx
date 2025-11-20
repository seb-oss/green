/* eslint no-console: "off" */
import React from 'react'
import { useArgs } from 'storybook/preview-api'
import { Meta, Story } from '@storybook/react/types-6-0'

import Modal, { ModalProps } from './modal'

const Template: Story<ModalProps> = (props) => {
  const [{ isOpen }, updateArgs] = useArgs()
  const handleClose = () => {
    updateArgs({ isOpen: false })
  }

  const openModal = () => {
    updateArgs({ isOpen: true })
  }
  const onConfirm = () => {
    console.log('ok clicked')
  }

  return (
    <div>
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

/**
 * **Note**: This version of Modal is deprecated! Please use the `gds-dialog` web component from green-core instead.
 */
export const ModalDefault: Story<ModalProps> = Template.bind({})

ModalDefault.args = {
  type: 'default',
  header: 'Default Modal',
  closeText: 'Custom Close Label',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
}

export const SlideOutSmall: Story<ModalProps> = Template.bind({})
SlideOutSmall.args = {
  type: 'slideout',
  header: 'SlideOut Modal - Small',
  closeText: 'Custom Close Label',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
  size: 'sm',
}

export const SlideOutMedium: Story<ModalProps> = Template.bind({})
SlideOutMedium.args = {
  type: 'slideout',
  header: 'SlideOut Modal - Medium',
  closeText: 'Custom Close Label',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
  size: 'md',
}

export const SlideOutLarge: Story<ModalProps> = Template.bind({})
SlideOutLarge.args = {
  type: 'slideout',
  header: 'SlideOut Modal - Large',
  closeText: 'Custom Close Label',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
  size: 'lg',
}

export const TakeOver: Story<ModalProps> = Template.bind({})
TakeOver.args = {
  type: 'takeover',
  header: 'TakeOver Modal',
  closeText: 'Custom Close Label',
  children: 'Body content',
  confirm: 'OK',
  dismiss: 'Nope',
}

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  component: Modal,
  parameters: {
    componentIds: [
      'component-dialogue',
      'component-slideout',
      'component-foldout',
      'component-takeover',
    ],
  },
}

export default meta
