import axios from "../helpers/axios";





export const createUser = async (data:any) => {
    try {
      const res = await axios.post(`/auth/register`,data);
      console.log('Response received:', res.data);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  export const getOtp = async (data:any) => {
    try {
      const res = await axios.post(`/auth/getOtp`,data);
      console.log('Response received:', res.data);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  export const googlSignup = async (data:any) => {
    try {
      const res = await axios.post(`/auth/google-sign-up`,data);
      console.log('Response received:', res.data);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  export const facebooklogin = async (data:any) => {
    try {
      const res = await axios.post(`/auth/facebook-sign-in`,data);
      console.log('Response received:', res.data);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };