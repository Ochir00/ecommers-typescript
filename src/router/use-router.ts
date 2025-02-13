import { Router } from "express";

import { getproduct, getproductbyid, loginstep, newProduct, profileEdit, profilelogin, register} from "../controller/Controll"
const useRouter = Router();

useRouter.post("/register", register).post("/login", loginstep).get("/profile/:id", profilelogin).put("/profile/:id", profileEdit)

const products = Router();
products.post("/", newProduct).get("/", getproduct).get("/:id", getproductbyid)
export { useRouter, products};