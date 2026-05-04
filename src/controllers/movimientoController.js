import * as movimientoModel from "../models/movimientoModel.js";

export const crearMovimiento = async (req, res) => {
  try {
    const { producto_id, tipo, cantidad } = req.body;

    if (!producto_id || !tipo || !cantidad) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const result = await movimientoModel.crearMovimiento(req.body);
    res.json(result);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};