import { Router } from "express";
import {
  getProducts,
  getRelacional,
  createNewProduct,
  getProductById,
  deleteProductById,
  getLogin,
  getSum,
  getTotalProducts,
  updateProductById,
  createNewRelacional,
  getFiltro,
  SumFilter,
  getVistaPlano,
  getUpdateGeneral,
  deleteRelacional
} from "../controllers/products.controller";

const router = Router();

router.get("/cartera", getProducts);
router.get("/sum", getSum);
router.get("/relacional", getRelacional);
router.get("/filtro",getFiltro);
router.get("/sumfilter",SumFilter);
router.get("/vistaplano",getVistaPlano);
router.put("/update/:TerceroMaster",getUpdateGeneral);
router.delete("/delete/:TerceroMaster",deleteRelacional);

router.get("login",getLogin)

router.post("/cartera", createNewProduct);
router.post("/relacional", createNewRelacional);

router.get("/products/count", getTotalProducts);

router.get("/products/:IdDocumento&:IdSede", getProductById);

router.delete("/cartera/:IdDocumento&:IdSede", deleteProductById);

router.put("/products/:IdDocumento&:IdSede", updateProductById);

export default router;
