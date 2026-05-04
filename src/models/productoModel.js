import { pool } from "../config/db.js";

export const getProductos = async () => {
  const [rows] = await pool.query("SELECT * FROM productos");
  return rows;
};

export const crearProducto = async (data) => {
  const { nombre, modelo, cantidad } = data;

  const [result] = await pool.query(
    "INSERT INTO productos (nombre, modelo, cantidad) VALUES (?, ?, ?)",
    [nombre, modelo, cantidad]
  );

  return { id: result.insertId, ...data };
};