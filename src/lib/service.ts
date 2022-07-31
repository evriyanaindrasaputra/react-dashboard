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

export const getListCustomer = async () : Promise<{
  success : boolean,
  message : string
  data : Customer[]
}> => {
  return await fetcher.get('customers')
}
