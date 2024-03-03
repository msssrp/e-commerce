const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;
const app = express();
app.use(cors({ Credential: true, origin: CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(() => {
  console.log("database conntected");
});

app.get("/", (req, res) => {
  res.send("<h1>heyy</h1>");
});

//swagger
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.1.0",
  info: {
    title: "RestFul API for Mern shop",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:8080",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const productRoute = require("./routes/product.route");
app.use("/products", productRoute);

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
