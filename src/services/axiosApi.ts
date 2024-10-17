import axios from "axios";

// eslint-disable-next-line import/prefer-default-export
export const ApiCall = axios.create({
  baseURL: "http://127.1.0.0:8000",
//   baseURL: "https://bubbl.cards",
  // baseURL: "https://devapi.bubbl.cards",
});