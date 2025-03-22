import { useState } from 'react'
import { createPortal } from 'react-dom'

import { Button, Modal } from '@sebgroup/green-react'

export const Modals = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isTakeover, setIsTakeover] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Slideout</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        type="slideout"
        preventBackdropClose
      >
        This is a modal
      </Modal>
      <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
      {createPortal(
        <Modal
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          preventBackdropClose
        >
          This is a modal
        </Modal>,
        document.body,
      )}
      <Button onClick={() => setIsTakeover(true)}>Open Takeover</Button>
      <Modal
        type="takeover"
        isOpen={isTakeover}
        onClose={() => setIsTakeover(false)}
        preventBackdropClose
      >
        This is a modal
      </Modal>
    </>
  )
}
