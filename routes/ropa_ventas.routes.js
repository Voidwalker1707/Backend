import { Router } from 'express';
import { deleteVentaRopa, getOneVentaRopa, getVentaRopa, patchVentaRopa, postVentaRopa } from '../controllers/ropa_ventas.controller.js';

const ventaRopaRouter = Router();


//get
ventaRopaRouter.get("/",getVentaRopa)

ventaRopaRouter.get("/:id",getOneVentaRopa)







// POST - Crear nueva prenda de ropa
ventaRopaRouter.post('/',postVentaRopa );




// PUT/PATCH
//http://localhost:3000/api/v1/ropa/id
ventaRopaRouter.patch("/:id",patchVentaRopa)

//DELETE

ventaRopaRouter.delete("/:id", deleteVentaRopa)




export { ventaRopaRouter };



