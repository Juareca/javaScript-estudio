require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

// Servir archivos estáticos (HTML, JS)
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Servidor en http://localhost:${PORT}`));
