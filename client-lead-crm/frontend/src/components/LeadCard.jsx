import React from "react";

const LeadCard = ({ lead, onStatusChange }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "10px",
      }}
    >
      <h3>{lead.name}</h3>
      <p>Email: {lead.email}</p>
      <p>Source: {lead.source}</p>
      <p>Status: <strong>{lead.status}</strong></p>

      <select
        value={lead.status}
        onChange={(e) => onStatusChange(lead._id, e.target.value)}
      >
        <option value="new">New</option>
        <option value="contacted">Contacted</option>
        <option value="converted">Converted</option>
      </select>
    </div>
  );
};

export default LeadCard;
