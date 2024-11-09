const REGISTER = '_reg'

const set = (key: string, value: string) => sessionStorage.setItem(key, value)
const get = (key: string) => sessionStorage.getItem(key)
const remove = (key: string) => sessionStorage.removeItem(key)


export const setRegisterData = (user: object) =>
    set(REGISTER, JSON.stringify(user))
  export const getRegisterData = () => {
    const registerData = get(REGISTER)
    return registerData ? JSON.parse(registerData) : null
  }
  export const removeRegisterData = () => remove(REGISTER)