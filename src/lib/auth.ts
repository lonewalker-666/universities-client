import Router from "next/router"
import { noAuthCheckPaths } from "./constants"
import { get, omit } from "lodash"
import u from "./util"
import { USER } from "../context/action"


export const createDeviceId = () => {
    const device_id = crypto.randomUUID()
    localStorage.setItem('_di',device_id)
    return device_id
}

export const manipulateError = (e:any) => {
    const errorMessage = {responseCode:null,responseDescription:null}
    errorMessage['responseCode'] = e?.response?.status
    errorMessage['responseDescription'] = e?.message
    return errorMessage
}

export const closeSplash = () => {
    const loader = document.getElementById("globalLoader");
    if (loader) {
      loader.style.display = "none";
    }
  }

export const CheckAuth = async (callApi:any,dispatch:any) => {
    const token = localStorage.getItem("ss_t");
    const deviceId = localStorage.getItem("_di");
    if (token) {
      const platform = get(window, "navigator.userAgentData.platform", "");
      const encrypted_ss_d = u.encrypt({
        token: token,
        platform: platform,
        device_id: deviceId,
      });
      await callApi({ ss_d: encrypted_ss_d });
    } 
    else {
      !noAuthCheckPaths.includes(Router.pathname) && Router.push("/login?lt=1");
      localStorage.clear()
      closeSplash()
    }
  };

  // const setAuthDataError = () => {
  //   message({ type: "error", text: "Oop! Something went wrong. Please try login again." })
  //   Router.push('/login?lt=1')
  // }

  export const setAuthData = async(data:string,dispatch:any) => {
   try{
    const decryptData = await u.decrypt(data)
    // const user_data = UserMapper(decryptData)
    const token = get(decryptData,"token","")
    await localStorage.setItem("ss_t",token)
    if(token){
      const globalStarageData = token ? omit(decryptData,'token') : decryptData
     await dispatch({
        type:USER,
        payload:globalStarageData
      })
      Router.push('/dashboard')
    }
    // else setAuthDataError()
   }
   catch(e){
    console.log(e)
   }
  }

  export const onAuthSuccess = async(data:any,dispatch:any) => {
    const decryptData = await u.decrypt(data.data)
    await dispatch({
      type:USER,
      payload:decryptData
    })
   await noAuthCheckPaths.includes(Router.pathname) && Router.push("/dashboard");
    closeSplash()
  }

  export const onAuthError = (error:any) => {
     Router.push("/login?lt=1");
     localStorage.clear()
     setTimeout(()=>closeSplash(),500)
  }
