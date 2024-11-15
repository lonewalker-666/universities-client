import { toast } from "react-toastify";
import axios from "../helpers/axios";
import { getAccessToken } from "../helpers/local-storage";
import Router from "next/router";


export const getEssays = async () => {
    try {
        const res = await axios.get(`/essay/getAllEssay`,{
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            }
        });
        return res?.data?.essays;
    } catch (e: any) {
        toast.error(e?.response?.data?.message || "Something went wrong");
        return false;
    }
};  

export const getEssayOne = async (essayId: string) => {
    try {
        const res = await axios.get(`/essay/getEssay/${essayId}`,{
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            }
        });
        return res?.data?.essays;
    } catch (e: any) {
        toast.error(e?.response?.data?.message || "Something went wrong");
        return false;
    }
};  

export const createEssay = async (data: any) => {
    try {
        const res = await axios.post(`/essay/createEssay`, data,{
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        });
        toast.success(res?.data?.message);
        Router.push('/essays')
        return res?.data?.success;
    } catch (e: any) {
        toast.error(e?.response?.data?.message || "Something went wrong");
        return false;
    }
};

export const editEssay = async (data: any) => {
    try {
        const res = await axios.put(`/essay/editEssay`, data,{
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        });
        toast.success(res?.data?.message);
        Router.push('/essays')
        return res?.data?.success;
    } catch (e: any) {
        toast.error(e?.response?.data?.message || "Something went wrong");
        return false;
    }
};