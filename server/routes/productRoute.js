import express from "express";
import {
  getAllProducts,
  createNewProduct,
  updateProductById,
  deleteProductById,
} from "../controllers/productController.js";

const router = express.Router();

//@route /api/v1/products
router.route("/").get(getAllProducts).post(getAllProducts);
router.route("/createProduct").post(createNewProduct);
//@route /api/v1/product/someId/
router.route("/:id").put(updateProductById).delete(deleteProductById);

export default router;
