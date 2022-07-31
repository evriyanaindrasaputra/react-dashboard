import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { editCustomer } from '~/lib/service'
import { queryClient } from '~/providers/App'
import { Customer } from '~/types/customer'
import { toast } from 'react-toastify'

type FormEditCustomerProps = {
  setIsOpen: () => void
  customer: Customer
}

const FormEditCustomer: React.FC<FormEditCustomerProps> = ({ setIsOpen, customer }) => {
  const { register, formState: { errors }, handleSubmit } = useForm<Customer>({
    defaultValues: {
      id: customer.id,
      name: customer.name,
      address: customer.address,
      country: customer.country,
      phone_number: customer.phone_number,
      job_title: customer.job_title,
    }
  })
  const { mutate, isLoading } = useMutation(editCustomer, {
    onSuccess: () => {
      toast.success('Edit Kustomer Berhasil')
      setIsOpen()
      queryClient.invalidateQueries(['customer'])
    }
  })
  async function onSubmit(values: Customer) {
    mutate(values)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-2">
      <div className="rounded-md shadow-sm space-y-6 mb-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: true, })}
            className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
            placeholder="name"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            {...register("address", { required: true, })}
            className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
            placeholder="address"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            {...register("country", { required: true, })}
            className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
            placeholder="country"
          />
        </div>
        <div>
          <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            {...register("phone_number", { required: true, })}
            className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
            placeholder="phone_number"
          />
        </div>
        <div>
          <label htmlFor="job_title" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            {...register("job_title", { required: true, })}
            className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
            placeholder="job_title"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        >
          Edit Kustomer
        </button>
      </div>
    </form>
  )
}

export default FormEditCustomer
