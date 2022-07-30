import fetcher from "./fetcher"

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
