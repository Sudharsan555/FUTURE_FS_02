import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

/* =========================
   PUBLIC – CONTACT FORM
========================= */
export const createLead = async (leadData) => {
  const res = await API.post("/leads", leadData);
  return res.data;
};

/* =========================
   ADMIN – GET ALL LEADS
========================= */
export const getLeads = async (token) => {
  const res = await API.get("/leads", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

/* =========================
   ADMIN – UPDATE LEAD STATUS
========================= */
export const updateLeadStatus = async (id, status, token) => {
  const res = await API.put(
    `/leads/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
