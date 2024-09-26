import * as CryptoJS from "crypto-js";
import { AES_KEY, AES_IV } from "./constants";

const u = {
  encrypt: (data:any) => {
try{
  let key = AES_KEY; //length 32
  let iv = AES_IV;
  let cipher = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    CryptoJS.enc.Utf8.parse(key),
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
      mode: CryptoJS.mode.CBC,
    }
  );
  return cipher.toString();
} catch(e){
  console.log(e)
}
  },
  decrypt: (data:any) => {
    try {
      let key = AES_KEY; //length 32
      let iv = AES_IV;
      let cipher = JSON.parse(
        CryptoJS.enc.Utf8.stringify(
          CryptoJS.AES.decrypt(
            data,
            CryptoJS.enc.Utf8.parse(key),
            {
              iv: CryptoJS.enc.Utf8.parse(iv),
              mode: CryptoJS.mode.CBC,
            }
          )
        )
      );
      return cipher;
      
    } catch (e) {
      console.log(e);
    }
  },
  num_to_k:(num:number)=>{
    const returnValue = new Intl.NumberFormat( 'en-US', { maximumFractionDigits: 1,notation: "compact" , compactDisplay: "short" }).format(num)
    return returnValue
  },
  customSearch:(value:string,searchText:string)=>{
    const return_value = (searchText && value) && value.toUpperCase().search(searchText.toUpperCase())
    return return_value != -1 && value
},
getToken:()=>{
  const token = typeof window !== 'undefined' ? localStorage.getItem("ss_t") : ""
  return token
},

preceedZero : (number: number, minLength: number): string => {
  return number.toString().padStart(minLength, '0');
},


};

export default u;