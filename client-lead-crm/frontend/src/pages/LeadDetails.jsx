import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const LeadDetails = () => {
  const { id } = useParams();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `http://localhost:5000/api/leads/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setLead(res.data);
      } catch (error) {
        console.error("Lead fetch error:", error.response?.data);
      }
    };

    if (id) fetchLead();
  }, [id]);

  if (!lead) return <p>Loading lead details...</p>;

  return (
    <div className="content">
      <h2>Lead Details</h2>
      <p><b>Name:</b> {lead.name}</p>
      <p><b>Email:</b> {lead.email}</p>
      <p><b>Status:</b> {lead.status}</p>
      <p><b>Message:</b> {lead.message}</p>
    </div>
  );
};

export default LeadDetails;
