import { Router } from "express";

import { getproduct, getproductbyid, loginstep, newProduct, profileEdit, profilelogin, register, updateProductID, deleteProductID} from "../controller/Controll"
const useRouter = Router();

useRouter.post("/register", register).post("/login", loginstep).get("/profile/:id", profilelogin).put("/profile/:id", profileEdit)

const products = Router();
products.post("/", newProduct).get("/", getproduct).get("/:id", getproductbyid).put("/:id", updateProductID).delete("/:id", deleteProductID)
export { useRouter, products};