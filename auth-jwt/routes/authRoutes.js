const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

router.post("/login", (req, res) => {
    const { username, role } = req.body;
    if (!username || !role) return res.status(400).json({ error: "Usuario y rol requeridos" });

    const token = jwt.sign({ username, role }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});

module.exports = router;
