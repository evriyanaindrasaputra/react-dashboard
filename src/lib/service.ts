import fetcher from "./fetcher"
import { Customer } from '~/types/customer'

export const postLogin = async (payload: { email: string, password: string }): Promise<{
  access_token: string,
  expires_in: number,
  token_type: string
}> => {
  return await fetcher.post('auth/login', {
    email: payload.email,
    password: payload.password
  })
}

export const getListCustomer = async (): Promise<{
  success: boolean,
  message: string
  data: Customer[]
}> => {
  return await fetcher.get('customers')
}

export const deleteCustomer = async (id: number) => {
  return await fetcher.delete('customers', {
    // @ts-ignore
    id
  })
}

export const addCustomer = async (payload : {name :string,address :string, country :string, phone_number: string, job_title: string}) => {
  return await fetcher.post('customers', {
    name: payload.name,
    address: payload.address,
    country: payload.country,
    phone_number: payload.phone_number,
    job_title: payload.job_title,
    status: false
  })
}
