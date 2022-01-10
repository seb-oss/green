import { useState } from 'react'
import Modal from './modal'

export const ModalSample = () => {
  const [toggleModal, settoggleModal] = useState<boolean>(false)

  const closeModal = () => {
    settoggleModal(false)
  }

  const openModal = () => {
    settoggleModal(true)
  }

  const onConfirm = () => {
    console.log('ok clicked')
  }

  return (
    <div>
      <button className="button" onClick={openModal}>
        open modal
      </button>
      <br />
      <br />
      {toggleModal && (
        <Modal
          type="default"
          header="Default modal"
          confirm="OK"
          dismiss="Nope"
          onClose={closeModal}
          onConfirm={onConfirm}
        >
          Body Content
        </Modal>
      )}
    </div>
  )
}

export default ModalSample
