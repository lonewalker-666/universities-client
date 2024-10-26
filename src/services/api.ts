import axios from "../helpers/axios";

export const getPlans = async () => {
  try {
    const res = await axios.get('/get/plans');  // Make sure POST is correct here
    console.log('Response received:', res);  // Log entire response object
    if (res?.data?.data) {
      return res?.data?.data;
    } else {
      console.error("Unexpected response structure", res);
      return [];
    }
  } catch (e) {
    console.error('Error fetching plans:', e);  // Log error for more details
    return [];
  }
};


export const getGender = async () => {
  try {
    const res = await axios.get(`/get/gender`);
    console.log('Response received:', res.data);
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getGradeLevel = async () => {
  try {
    const res = await axios.get(`/get/gradeLevel`);
    console.log('Response received:', res.data);
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getRace = async () => {
  try {
    const res = await axios.get(`/get/race`);
    console.log('Response received:', res.data);
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};