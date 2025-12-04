const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { query } = require('express-validator');

router.get(
  '/products',
  [
    query('category').optional(),
    query('search').optional().escape()
  ],
  productController.getProducts
);

module.exports = router;