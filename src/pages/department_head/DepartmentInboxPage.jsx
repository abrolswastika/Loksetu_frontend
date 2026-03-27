import React from "react";
import { useApp } from "../../context/AppContext";

const DepartmentInboxPage = () => {
  const { complaints, setComplaints } = useApp();

  const toggleStatus = (id) => {
    const updated = complaints.map((c) =>
      c.id === id
        ? {
            ...c,
            status: c.status === "pending" ? "resolved" : "pending",
          }
        : c
    );
    setComplaints(updated);
  };

  return (
    <div>
      <h2 style={{ marginBottom: 5 }}>Complaint Inbox</h2>
      <p style={{ color: "#666", marginBottom: 20 }}>
        All department complaints
      </p>

      {complaints.length === 0 ? (
        <div style={emptyBox}>🚧 No complaints yet</div>
      ) : (
        complaints.map((c) => (
          <div key={c.id} style={card}>
            <div>
              <h3>{c.title}</h3>
              <p>{c.description}</p>

              <span style={chip}>{c.category}</span>

              <p style={meta}>ID: {c.id}</p>
              <p style={meta}>Date: {c.date}</p>

              <span
                style={{
                  fontWeight: "bold",
                  color:
                    c.status === "resolved" ? "#16a34a" : "#f59e0b",
                }}
              >
                {c.status}
              </span>
            </div>

            <button
              onClick={() => toggleStatus(c.id)}
              style={{
                padding: "8px 12px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background:
                  c.status === "resolved"
                    ? "#f59e0b"
                    : "#22c55e",
                color: "white",
              }}
            >
              {c.status === "resolved"
                ? "Mark Pending"
                : "Mark Resolved"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

/* STYLES */
const card = {
  display: "flex",
  justifyContent: "space-between",
  padding: 20,
  background: "white",
  borderRadius: 12,
  marginBottom: 15,
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};

const chip = {
  display: "inline-block",
  background: "#e0f2fe",
  color: "#0284c7",
  padding: "4px 10px",
  borderRadius: 20,
  fontSize: 12,
  marginTop: 5,
};

const meta = {
  fontSize: 12,
  color: "#777",
};

const emptyBox = {
  padding: 40,
  textAlign: "center",
  background: "white",
  borderRadius: 12,
};

export default DepartmentInboxPage;
