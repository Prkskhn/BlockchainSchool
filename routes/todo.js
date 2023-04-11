const express = require("express");
const router = express.Router();
const todoData = require("../todoData.json");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(todoData[parseInt(id)]);
  console.log(todoData);
});
router.post("/", (req, res) => {
  const { title, desc } = req.body;
  todoData.push({ title, desc, isDone: false });
  res.send(todoData);
  console.log(todoData);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  todoData[parseInt(id)] = {
    title,
    desc,
  };

  res.send(todoData);
  console.log(todoData);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  todoData.filter((v, i) => {
    return parseInt(id) !== i;
  });
  res.send(todoData);
  console.log(todoData);
});

module.exports = router;
