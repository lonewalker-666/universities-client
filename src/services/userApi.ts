import { toast } from "react-toastify";
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const getProfile = async () => {
  try {
    const res = await axios.get(`/user/getProfile`, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    return res?.data?.profile;
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};

export const updateProfile = async (data: any) => {
  try {
    const res = await axios.put(`/user/updateProfile`, data, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    toast.success(res?.data?.message);
    return res?.data?.success;
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};

export const updatePersonDetails = async (data: any) => {
  try {
    const res = await axios.put(`/user/updateProfilePersonal`, data, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    toast.success(res?.data?.message);
    return res?.data?.success;
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};
export const updateAcademicBackground = async (data: any) => {
  try {
    const res = await axios.post(`/user/updateAcademicBackground`, data, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    toast.success(res?.data?.message);
    return res?.data?.success;
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong");
  }
};
