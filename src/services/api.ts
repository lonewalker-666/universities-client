import axios from "../helpers/axios";

export const getPlans = async () => {
  try {
    const res = await axios.post('/getPlans');  // Make sure POST is correct here
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
