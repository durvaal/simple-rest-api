const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express();
const port = 3000;

const todoRouter = require("./routes/todo");

app.use(express.json())

app.use("/todo", todoRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/html", (req, res) => {
  res.send("<html><body><h1>Hello World</h1></body></html>");
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});