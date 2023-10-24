import { Router } from 'express';
import { createVenta, deleteVenta, getOneVenta, getVentas, patchVenta } from '../controllers/ventas.controllers.js';
export const ventaRouter = Router();

//ventaRouter.use(auth)
ventaRouter.get("/",getVentas)
ventaRouter.get("/:id",getOneVenta)
ventaRouter.post("/",createVenta)
ventaRouter.patch("/:id",patchVenta)
ventaRouter.delete("/:id",deleteVenta)