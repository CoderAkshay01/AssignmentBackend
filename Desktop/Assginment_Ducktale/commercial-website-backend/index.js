const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productRoutes = require("./src/routes/productRoute");
const cartRoutes = require("./src/routes/cartRoute");
const dbConfig = require("./src/config");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
mongoose.connect(dbConfig.url, dbConfig.options);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
});

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
