import { Router } from "express";
import ProductController from "../controllers/productController.js";
import { check } from 'express-validator';

const router: Router = Router();

const validateProduct = [
  check('name').notEmpty().withMessage('Product name is required.'),
  check('description').notEmpty().withMessage('Product description is required.'),
  check('price').isNumeric().withMessage('Product price must be an number.'),
  check('ean').optional().isLength({min: 13, max: 13}).withMessage('EAN must be 13 digits long'),
  // check('image').custom((value, { req }) => {
  //   if (!req.files || !req.files.image) {
  //     throw new Error('Product image is required.');
  //   }
  //   return true;
  // })
]

//Get all products
router.get("/products", ProductController.getAll);

// Get products by id
router.get("/products/:id", ProductController.getOne);

// Create a new product
router.post("/products", validateProduct, ProductController.create);

// Update an existing product
router.put("/products/:id", ProductController.update);

// Delete and existing product

router.delete("/products/:id", ProductController.delete);


export default router;
