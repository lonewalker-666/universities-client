const ACCESSTOKEN = 'accesstoken'
const REFRESHTOKEN = 'refreshtoken'
const REGISTER = 'register'

const set = (key: string, value: string) => localStorage.setItem(key, value)
const get = (key: string) => localStorage.getItem(key)
const remove = (key: string) => localStorage.removeItem(key)

export const getAccessToken = () => get(ACCESSTOKEN)
export const setAccessToken = (token: string) => set(ACCESSTOKEN, token)
export const removeAccessToken = () => remove(ACCESSTOKEN)

export const getRefreshToken = () => get(REFRESHTOKEN)
export const setRefreshToken = (token: string) => set(REFRESHTOKEN, token)
export const removeRefreshToken = () => remove(REFRESHTOKEN)

export const setRegisterData = (user: object) =>
  set(REGISTER, JSON.stringify(user))
export const getRegisterData = () => {
  const registerData = get(REGISTER)
  return registerData ? JSON.parse(registerData) : null
}
export const removeRegisterData = () => remove(REGISTER)