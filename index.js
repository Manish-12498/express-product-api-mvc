const express = require('express')
const connectDB = require('./config/db');
const dotenv=require("dotenv");
const productRoutes=require("./routes/productRoutes");

dotenv.config();

const app = express()
const port = process.env.PORT;



app.use("/api",productRoutes);

connectDB();

app.listen(port, () => {
  console.log(`Cart functionality app listening on port ${port}`)
})
