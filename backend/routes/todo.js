const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();

const client = new PrismaClient();

router.post("/", async (req, res) => {
  try {
    const { todo, userId } = req.body;
    if (!todo) {
      return res.status(400).json({ ok: false, error: "Not exist todo." });
    }
    if (!userId) {
      return res.status(400).json({ ok: false, error: "Not exist userId." });
    }

    const user = await client.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });
    if (!user) {
      return res.status(400).json({ ok: false, error: "Not exist user" });
    }
    const newTodo = await client.todo.create({
      data: {
        todo,
        isDone: false,
        userId: user.id,
      },
    });
    res.json({ ok: true, todo: newTodo });
  } catch (error) {
    console.error(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await client.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!user) {
      return res.status(400).json({ ok: false, error: "Not exist user." });
    }

    const todos = await client.todo.findMany({
      where: {
        userId: parseInt(userId),
      },
    });

    res.json({ ok: true, todos });
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id/done", async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
