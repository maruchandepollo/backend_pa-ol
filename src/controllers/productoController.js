import * as productoModel from "../models/productoModel.js";

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await productoModel.getProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

export const crearProducto = async (req, res) => {
  try {
    const { nombre, modelo, cantidad } = req.body;

    if (!nombre || !modelo || cantidad == null) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const producto = await productoModel.crearProducto(req.body);
    res.status(201).json(producto);

  } catch (error) {
    res.status(500).json({ error: "Error al crear producto" });
  }
};