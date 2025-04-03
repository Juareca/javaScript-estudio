require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const path = require("path");

const app = express();
app.use(express.json()); // Permitir JSON en el body
app.use(express.static("public")); // Servir archivos estáticos desde la carpeta 'public'

const SECRET_KEY = process.env.JWT_SECRET || "mi_secreto_super_seguro";

// 👉 Ruta para iniciar sesión y generar un token
app.post("/login", (req, res) => {
    const { username } = req.body;
    if (!username) return res.status(400).json({ error: "Se requiere un nombre de usuario" });

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ message: "Inicio de sesión exitoso", token });
});

// 👉 Middleware para verificar el token
const verificarToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1]; // Extraer token del header
    if (!token) return res.status(401).json({ error: "Acceso denegado, token requerido" });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ error: "Token inválido o expirado" });
        req.user = decoded;
        next();
    });
};

// 👉 Ruta protegida
app.get("/perfil", verificarToken, (req, res) => {
    res.json({ message: `Bienvenido, ${req.user.username}!`, user: req.user });
});

// Servir la página principal (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar servidor
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
