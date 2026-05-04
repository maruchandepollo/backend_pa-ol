import express from "express";
import cors from "cors";
import { pool } from "./config/db.js";
import productoRoutes from "./routes/productoRoutes.js";
import movimientoRoutes from "./routes/movimientoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/productos", productoRoutes);
app.use("/movimientos", movimientoRoutes);

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

const startServer = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conectado a la base de datos");
    connection.release();

    app.listen(3000, () => {
      console.log("Servidor corriendo en puerto 3000");
    });

  } catch (error) {
    console.error("Error de conexión:", error);
  }
};

startServer();