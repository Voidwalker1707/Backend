import { Router } from 'express';
import { createUser, deleteUser, getOneUser, getUsers, login, patchUsers, uploadAvatar } from '../controllers/user.controller.js';
import { simpleMiddleware } from '../middlewares/simple.middleware.js';
import { upload } from '../middlewares/upload.middleware.js';
export const UserRouter = Router();






UserRouter.post("/",simpleMiddleware,createUser)
UserRouter.get("/",getUsers)
UserRouter.get("/:id",getOneUser)
UserRouter.patch("/:id",simpleMiddleware,patchUsers )
UserRouter.delete("/:id",deleteUser)
UserRouter.post("/login",login)
UserRouter.post("/avatar",upload.single('avatar'),uploadAvatar)