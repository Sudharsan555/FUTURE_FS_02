import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "http://localhost:5173", // frontend URL (Vite)
  credentials: true
}));

app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Client Lead CRM API running...");
});

export default app;
