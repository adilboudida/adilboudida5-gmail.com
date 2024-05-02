const express = require("express");
const bookRoutes = require("./routes/book");
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");

const app = express();

// middleware
app.use(express.json());

// define all our routes
app.use("/", bookRoutes);
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Adil Books Express API with Swagger",
      version: "0.1.0",
      description:
        "Book API application made with Express&NestJS and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "skills with Adil",
        url: "https://adilsoft.online/",
        email: "Boudidaadil@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
