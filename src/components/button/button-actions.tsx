import React from 'react'
import { Dialog } from '@headlessui/react'
import ModalComponent from '../modal/modal-component'

const ButtonActions: React.FC = () => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false)
  const [isDelete, setIsDelete] = React.useState<boolean>(false)
  function displayModalEdit() {
    setIsEdit(!isEdit)
  }
  function displayModalDelete() {
    setIsDelete(!isDelete)
  }
  return (
    <>
      <div className=" space-x-2">
        <button className="py-3 px-2 bg-blue-400 rounded text-black" type="button" onClick={displayModalEdit}>Edit</button>
        <button className="py-3 px-2 bg-red-400 rounded text-black" type="button" onClick={displayModalDelete}>Delete</button>
      </div>
      {/* Modal Edit */}
      <ModalComponent isOpen={isEdit} setIsOpen={displayModalEdit}>
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Payment successful
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Your payment has been successfully submitted. We’ve sent
              you an email with all of the details of your order.
            </p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={displayModalEdit}
            >
              Got it, thanks!
            </button>
          </div>
        </Dialog.Panel>
      </ModalComponent>
      <ModalComponent isOpen={isDelete} setIsOpen={displayModalDelete}>
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Payment successful
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Your payment has been successfully submitted. We’ve sent
              you an email with all of the details of your order.
            </p>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={displayModalDelete}
            >
              Got it, thanks!
            </button>
          </div>
        </Dialog.Panel>
      </ModalComponent>
    </>
  )
}

export default ButtonActions
