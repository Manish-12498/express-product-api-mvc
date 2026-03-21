const express =require("express");
const productRoutes=require("./routes/product.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api",productRoutes);

module.exports = app;