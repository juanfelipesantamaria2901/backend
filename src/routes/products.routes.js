import { Router } from "express";
import {
  getProducts,
  getRelacional,
  createNewProduct,
  getProductById,
  deleteProductById,
  getLogin,
  getTotalProducts,
  updateProductById,
  createNewRelacional,
} from "../controllers/products.controller";

const router = Router();

router.get("/cartera", getProducts);
router.get("/relacional", getRelacional);

router.get("login",getLogin)

router.post("/cartera", createNewProduct);
router.post("/relacional", createNewRelacional);

router.get("/products/count", getTotalProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;
