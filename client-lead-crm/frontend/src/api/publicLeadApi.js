import axios from "axios";

const API_URL = "http://localhost:5000/api/leads";

export const createLead = async (leadData) => {
  const response = await axios.post(API_URL, leadData);
  return response.data;
};
