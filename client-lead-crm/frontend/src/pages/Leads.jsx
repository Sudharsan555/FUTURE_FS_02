import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Leads = () => {
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/leads",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setLeads(res.data);
      } catch (err) {
        console.error("Error loading leads", err);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className="content">
      <h2>Leads</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leads.length === 0 ? (
            <tr>
              <td colSpan="3">No leads found</td>
            </tr>
          ) : (
            leads.map((lead) => (
              <tr
                key={lead._id}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/leads/${lead._id}`)}
              >
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
