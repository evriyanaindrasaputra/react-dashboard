import React from 'react'
import { Dialog } from '@headlessui/react'
import { RiErrorWarningLine } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import ModalComponent from '../modal/modal-component'
import { useMutation } from '@tanstack/react-query'
import { deleteCustomer } from '~/lib/service'
import { Customer } from '~/types/customer'
import { queryClient } from '~/providers/App'
import { toast } from 'react-toastify'
import FormEditCustomer from '../form/form-edit-customer'

const ButtonActions: React.FC<{ customer : Customer}> = ({ customer}) => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false)
  const [isDelete, setIsDelete] = React.useState<boolean>(false)
  const deleteAction = useMutation(deleteCustomer, {
    onError: (error: any) => {
      toast.error(error.response.data.message)
    },
    onSuccess: () => {
      setIsDelete(false)
      queryClient.invalidateQueries(['customer'])
      toast.success('successfully delete')
    }
  })
  function displayModalEdit() {
    setIsEdit(!isEdit)
  }
  function displayModalDelete() {
    setIsDelete(!isDelete)
  }
  async function handleDelete() {
    if(typeof customer.id === 'number'){
      await deleteAction.mutate(customer.id)
    }
  }
  return (
    <>
      <div className=" gap-2 flex flex-wrap">
        <button className="py-1 px-1 text-sm text-white md:text-base md:py-3 md:px-2 bg-blue-400 rounded" type="button" onClick={displayModalEdit}>Edit</button>
        <button className="py-1 px-1 text-sm text-white md:text-base md:py-3 md:px-2 bg-red-400 rounded" type="button" onClick={displayModalDelete}>Delete</button>
      </div>
      {/* Modal Edit */}
      <ModalComponent isOpen={isEdit} setIsOpen={displayModalEdit}>
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          <div className="text-right">
            <button
              onClick={displayModalEdit}
            >
              <AiOutlineClose className='w-4 h-4' />
            </button>
          </div>
          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Edit Kustomer
          </Dialog.Title>
          <FormEditCustomer setIsOpen={displayModalEdit} customer={customer} />
        </Dialog.Panel>
      </ModalComponent>
      <ModalComponent isOpen={isDelete} setIsOpen={displayModalDelete}>
        <Dialog.Panel className="max-w-sm transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
          <Dialog.Title
            as="div"
            className=" text-center flex flex-col items-center"
          >
            <RiErrorWarningLine className="mb-4 w-14 h-14 text-red-700" />
            <h3 className="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete this customer</h3>
          </Dialog.Title>
          <div className="mt-4 text-center">
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={handleDelete}
            >
              Yes, I'm sure
            </button>
            <button
              type="button"
              className="text-gray-500 bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 "
              onClick={displayModalDelete}
            >
              No, cancel
            </button>
          </div>
        </Dialog.Panel>
      </ModalComponent>
    </>
  )
}

export default ButtonActions
