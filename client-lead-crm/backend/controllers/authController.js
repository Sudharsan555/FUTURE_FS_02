import jwt from "jsonwebtoken";

export const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  // ✅ SIMPLE STATIC ADMIN (for learning)
  if (email === "admin@gmail.com" && password === "admin123") {
    const token = jwt.sign(
      { role: "admin", email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      success: true,
      token,
      admin: { email }
    });
  }

  return res.status(401).json({ message: "Invalid admin credentials" });
};
