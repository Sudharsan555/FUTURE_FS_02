const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");
const auth = require("../middleware/auth");

/**
 * @route   GET /api/leads
 * @desc    Get all leads (Admin)
 */
router.get("/", auth, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   GET /api/leads/:id
 * @desc    Get single lead by ID
 */
router.get("/:id", auth, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   PUT /api/leads/:id
 * @desc    Update lead status
 */
router.put("/:id", auth, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }

    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
