import { Router } from "express";

import { users } from "../database/user-data";
import { loginstep, profileEdit, profilelogin, register} from "../controller/Controll"
const useRouter = Router();

useRouter.post("/register", register).post("/login", loginstep).get("/profile/:id", profilelogin).put("/profile/:id", profileEdit)
export { useRouter };
