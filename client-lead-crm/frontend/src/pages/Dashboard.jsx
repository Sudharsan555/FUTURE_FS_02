import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    converted: 0,
  });

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

        const leads = res.data;

        setStats({
          total: leads.length,
          new: leads.filter(l => l.status === "New").length,
          contacted: leads.filter(l => l.status === "Contacted").length,
          converted: leads.filter(l => l.status === "Converted").length,
        });

      } catch (err) {
        console.error("Failed to fetch leads", err);
      }
    };

    fetchLeads();
  }, []);

  return (
    <div className="content">
      <h2>Dashboard Overview</h2>

      <div className="cards">
        <div className="card">
          <h4>Total Leads</h4>
          <p>{stats.total}</p>
        </div>

        <div className="card">
          <h4>New Leads</h4>
          <p>{stats.new}</p>
        </div>

        <div className="card">
          <h4>Contacted</h4>
          <p>{stats.contacted}</p>
        </div>

        <div className="card">
          <h4>Converted</h4>
          <p>{stats.converted}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
