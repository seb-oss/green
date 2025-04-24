'use client'

import { GdsButton, GdsDialog } from '$/import/components'

const Dialog = () => {
  const handleOpen = () => {
    const dialog = document.getElementById('my-dialog') as HTMLDialogElement
    dialog?.show()
  }

  const handleClose = () => {
    const dialog = document.getElementById('my-dialog') as HTMLDialogElement
    dialog?.close('custom close')
  }

  return (
    <>
      <GdsButton aria-haspopup="dialog" onClick={handleOpen}>
        Open dialog
      </GdsButton>
      <GdsDialog heading="Dialog heading" id="my-dialog">
        This is the content of the dialog.
        <GdsButton slot="footer" onClick={handleClose}>
          Custom close button
        </GdsButton>
      </GdsDialog>
    </>
  )
}

export default Dialog
