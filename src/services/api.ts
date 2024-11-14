import axios from "../helpers/axios";
import { toast } from 'react-toastify';


export const getPlans = async () => {
  try {
    const res = await axios.get('/get/plans');  // Make sure POST is correct here
    if(res?.data?.success){
      return res.data.data;
    }
    else {
      toast.error(res?.data?.message || "Error fetching plans");
    }
  } catch (e) {
    toast.error("Error fetching plans");
    console.error('Error fetching plans:', e);  // Log error for more details
  }
};


export const getGender = async () => {
  try {
    const res = await axios.get('/get/gender');  // Make sure POST is correct here
    if(res?.data?.success){
      return res.data.data;
    }
    else {
      toast.error(res?.data?.message || "Error fetching gender");
    }
  } catch (e) {
    toast.error("Error fetching gender");
    console.error('Error fetching gender:', e);  // Log error for more details
  }
};

export const getGradeLevel = async () => {
  try {
    const res = await axios.get('/get/gradeLevel');  // Make sure POST is correct here
    if(res?.data?.success){
      return res.data.data;
    }
    else {
      toast.error(res?.data?.message || "Error fetching gradeLevel");
    }
  } catch (e) {
    toast.error("Error fetching gradeLevel");
    console.error('Error fetching gradeLevel:', e);  // Log error for more details
  }
};

export const getRace = async () => {
  try {
    const res = await axios.get('/get/race');  // Make sure POST is correct here
    if(res?.data?.success){
      return res.data.data;
    }
    else {
      toast.error(res?.data?.message || "Error fetching race");
    }
  } catch (e) {
    toast.error("Error fetching race");
    console.error('Error fetching race:', e);  // Log error for more details
  }
};

export const getHighschool = async () => {
  try {
    const res = await axios.get('/get/highSchool');  // Make sure POST is correct here
    if(res?.data?.success){
      return res.data.data;
    }
    else {
      toast.error(res?.data?.message || "Error fetching highSchool");
    }
  } catch (e) {
    toast.error("Error fetching highSchool");
    console.error('Error fetching highSchool:', e);  // Log error for more details
  }
};