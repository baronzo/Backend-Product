const pool = require('../config/db')

const getAllProducts = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM product_items')
        res.status(200).json(response.rows)
    } catch (error) {
        console.log(error);
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const response = await pool.query('SELECT * FROM product_items WHERE id = ($1)', [id])
        res.status(200).json(response.rows)
    } catch (error) {
        console.log(error);
    }
}

const addProduct = async (req, res) => {
    try {
        const { name, prices, status, quantity, image_url, category } = req.body
        const response = await pool.query('INSERT INTO product_items (name, prices, status, quantity, image_url, category) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', 
        [name, prices, status, quantity, image_url, category])
        res.status(201).json(response.rows)
      } catch (error) {
          console.log(error)
      }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const response = await pool.query(
            'UPDATE product_items SET name = ($1), prices = ($2), status = ($3), quantity = ($4), image_url = ($5), category = ($6) WHERE id = ($7) RETURNING *',
        [req.body.name, req.body.prices, req.body.status, req.body.quantity, req.body.image_url, req.body.category, id])
        res.status(201).json(response.rows) 
    } catch (error) {
        console.log(error)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const response = await pool.query('DELETE FROM product_items WHERE id = ($1)',[id])
        res.status(201).json("DELETE SUCCESS")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}