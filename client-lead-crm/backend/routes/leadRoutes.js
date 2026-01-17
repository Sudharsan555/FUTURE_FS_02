import express from "express";
import {
  createLead,
  getLeads,
  updateLeadStatus,
  getLeadById,          // ✅ ADD THIS
} from "../controllers/leadController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* =========================
   PUBLIC – CONTACT FORM
========================= */
router.post("/", createLead);

/* =========================
   ADMIN – PROTECTED
========================= */
router.get("/", authMiddleware, getLeads);
router.get("/:id", authMiddleware, getLeadById); // ✅ FIX FOR 404
router.put("/:id", authMiddleware, updateLeadStatus);

export default router;
