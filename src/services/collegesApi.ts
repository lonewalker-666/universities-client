import { toast } from "react-toastify";
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";

export const getAllColleges = async (data: any = {}) => {
  try {
    const accessToken = getAccessToken();
    const res = await axios.post(`/colleges/getColleges`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res?.data
  } catch (e: any) {
    toast.error(
      e?.response?.data?.message || "Something went wrong!!!. Please try again"
    );
  }
};

export const getCollegeDetails = async (collegeId: number) => {
  try {
    const accessToken = getAccessToken();
    const res = await axios.get(`/colleges/getCollegeOne/${collegeId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res?.data?.success ? res?.data?.collegeData : {};
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong!!!");
  }
};

export const addToWishlist = async (data: any) => {
  try {
    const accessToken = getAccessToken();
    const res = await axios.put(`/colleges/addToWishlist`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res?.data?.wishlisted;
  } catch (e: any) {
    toast.error(
      e?.response?.data?.message || "Something went wrong!!!. Please try again"
    );
  }
};

export const deleteEssay = async (essayId: string) => {
  try {
    const accessToken = getAccessToken();
    const res = await axios.delete(`/essay/deleteEssay/${essayId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res?.data?.success;
  } catch (e: any) {
    toast.error(
      e?.response?.data?.message || "Something went wrong!!!. Please try again"
    );
  }
};
export const getWhishlist = async () => {
  try {
    const accessToken = getAccessToken();
    const res = await axios.get(`/colleges/getWishlist`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res?.data?.wishlist;
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong!!!");
  }
};

export const getRecentlyVisted = async () => {
  try {
    const accessToken = getAccessToken();
    const res = await axios.get(`/colleges/recentlyVisited`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res?.data?.visited;
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong!!!");
  }
};

export const getOverview = async () => {
  try {
    const accessToken = getAccessToken();
    const res = await axios.get(`/get/overview`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res?.data?.data;
  } catch (e: any) {
    toast.error(e?.response?.data?.message || "Something went wrong!!!");
  }
};
