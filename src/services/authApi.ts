import axios from "../helpers/axios";





export const createUser = async (data:any) => {
    try {
      const res = await axios.post(`/register`,data,{ timeout: 5000 });
      console.log('Response received:', res.data);
      return res;
    } catch (e) {
      console.log(e);
      return e;
    }
  };