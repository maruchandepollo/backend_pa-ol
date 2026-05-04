import express from "express";
import { crearMovimiento } from "../controllers/movimientoController.js";

const router = express.Router();

router.post("/", crearMovimiento);

export default router;