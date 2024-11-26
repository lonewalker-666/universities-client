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
export const createProfile = async (data: any) => {
  try {
    const res = await axios.post(`/user/createProfile`, data, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    toast.success(res?.data?.message);
    return res?.data?.success;
  } catch (e: any) {
    console.log(e?.response?.data?.message);
    toast.error(
      e?.response?.data?.message || "Something went wrong!!!. Please try again"
    );
  }
};

export const createPersonalInfo = async (data: any) => {
  try {
    const res = await axios.post(`/user/updatePersonalInfo`, data, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    toast.success(res?.data?.message);
    return res?.data?.success;
  } catch (e: any) {
    console.log(e?.response?.data?.message);
    toast.error(
      e?.response?.data?.message || "Something went wrong!!!. Please try again"
    );
  }
};

export const createAcademicDetails = async (data: any) => {
  try {
    const res = await axios.post(`/user/updateAcademicBackground`, data, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    toast.success(res?.data?.message);
    return res?.data?.success;
  } catch (e: any) {
    console.log(e?.response?.data?.message);
    toast.error(
      e?.response?.data?.message || "Something went wrong!!!. Please try again"
    );
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
export const updateActTestScore = async (data: any) => {
  try {
    const res = await axios.post(`/user/updateActTestScore`, data, {
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
export const updateSatTestScore = async (data: any) => {
  try {
    const res = await axios.post(`/user/updateSatTestScore`, data, {
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
export const updateToeflTestScore = async (data: any) => {
  try {
    const res = await axios.post(`/user/updateToeflTestScore`, data, {
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
export const updateIELTSTestScore = async (data: any) => {
  try {
    const res = await axios.post(`/user/updateIELTSTestScore`, data, {
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
export const updateAPTestScore = async (data: any) => {
  try {
    const res = await axios.post(`/user/updateAPTestScore`, data, {
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

export const updateAdditionalInfo = async (data: any) => {
  try {
    const res = await axios.post(`/user/updateAdditionalInfo`, data, {
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
