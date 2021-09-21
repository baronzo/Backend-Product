const express = require("express")
const router = express.Router()
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../../controller/productController')

router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.post("/", addProduct)
router.patch("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router