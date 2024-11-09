const ACCESSTOKEN = '_at'
const REFRESHTOKEN = '_rf'
const DEVICEID = '_di'

const set = (key: string, value: string) => localStorage.setItem(key, value)
const get = (key: string) => localStorage.getItem(key)
const remove = (key: string) => localStorage.removeItem(key)

export const getAccessToken = () => get(ACCESSTOKEN)
export const setAccessToken = (token: string) => set(ACCESSTOKEN, token)
export const removeAccessToken = () => remove(ACCESSTOKEN)

export const getRefreshToken = () => get(REFRESHTOKEN)
export const setRefreshToken = (token: string) => set(REFRESHTOKEN, token)
export const removeRefreshToken = () => remove(REFRESHTOKEN)


export const setDeviceId = (deviceId: string) => set(DEVICEID, deviceId)
export const getDeviceId = () => get(DEVICEID)
