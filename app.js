const express = require("express");
const todoRouter = require("./routes/todo");
const app = express();
const port = 3020;

app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`port is : ${port}`);
});
