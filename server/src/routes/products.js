import { Router } from "express";
import { getProducts, newProduct, getProduct, deleteProduct, updateProduct } from "../controllers/products";
const router = Router();

router.get('/products', getProducts);
router.get('/products/code/:code', getProduct);
router.post('/products', newProduct);
router.put('/products', updateProduct);
router.delete('/products/code/:code', deleteProduct);

export default router;