import { Router } from 'express';
import { deleteRopa, getOneRopa, getRopa, patchRopa, postRopa } from '../controllers/ropa.controller.js';

const ropaRouter = Router();


//get
ropaRouter.get("/",getRopa)

ropaRouter.get("/:id",getOneRopa)







// POST - Crear nueva prenda de ropa
ropaRouter.post('/',postRopa );




// PUT/PATCH
//http://localhost:3000/api/v1/ropa/id
ropaRouter.patch("/:id",patchRopa)

//DELETE

ropaRouter.delete("/:id", deleteRopa)




export { ropaRouter };




