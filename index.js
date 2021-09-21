const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    next()
})

app.use('/api/product', require('./routes/api/product'))

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})