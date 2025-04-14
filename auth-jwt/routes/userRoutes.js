const express = require("express");
const { verificarToken, verificarRol } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/perfil", verificarToken, (req, res) => {
    res.json({ message: `Bienvenido ${req.user.username}, tu rol es ${req.user.role}.` });
});

router.get("/admin", verificarToken, verificarRol(["admin"]), (req, res) => {
    res.json({ message: "Bienvenido al panel de administrador." });
});

module.exports = router;
