import { Router } from "express";
import validateJOI from "../middlewares/validateJOI.js";
import verifyToken from "../middlewares/verifyToken.js";
import { signinSchema, userSchema } from "../joi/schemas.js";
import {me, signIn, signOut, signUp} from "../controllers/auth.js"

const authRouter = Router();

authRouter.get("/me", verifyToken, me);
authRouter.post("/signin", validateJOI(signinSchema), signIn);
authRouter.post('/signup', validateJOI(userSchema), signUp);
authRouter.delete('/signout', signOut);

export default authRouter;
