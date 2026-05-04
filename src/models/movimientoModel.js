import { pool } from "../config/db.js";

export const crearMovimiento = async (data) => {
  const { producto_id, tipo, cantidad, persona, area } = data;

  const conn = await pool.getConnection();

  try {
    await conn.beginTransaction();

    // 1. Obtener producto
    const [rows] = await conn.query(
      "SELECT cantidad FROM productos WHERE id = ?",
      [producto_id]
    );

    if (rows.length === 0) {
      throw new Error("Producto no existe");
    }

    let stock = rows[0].cantidad;

    // 2. Lógica
    if (tipo === "salida") {
      if (cantidad > stock) {
        throw new Error("Stock insuficiente");
      }
      stock -= cantidad;
    } else if (tipo === "entrada") {
      stock += cantidad;
    } else {
      throw new Error("Tipo inválido");
    }

    // 3. Actualizar stock
    await conn.query(
      "UPDATE productos SET cantidad = ? WHERE id = ?",
      [stock, producto_id]
    );

    // 4. Registrar movimiento
    await conn.query(
      "INSERT INTO movimientos (producto_id, tipo, cantidad, persona, area) VALUES (?, ?, ?, ?, ?)",
      [producto_id, tipo, cantidad, persona, area]
    );

    await conn.commit();
    conn.release();

    return { mensaje: "Movimiento realizado correctamente" };

  } catch (error) {
    await conn.rollback();
    conn.release();
    throw error;
  }
};