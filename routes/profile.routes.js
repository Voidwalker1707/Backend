import { Router } from "express";
import { getProfile } from "../controllers/profile.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const profileRouter = Router()

profileRouter.get("/home",auth,getProfile)



export default profileRouter