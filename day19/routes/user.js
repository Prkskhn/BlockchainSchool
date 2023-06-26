const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("유저 조회2");
});

router.post("/", (req, res) => {
  res.send("신규 유저 생성");
});
router.put("/:id", (req, res) => {
  res.send("유저 정보 수정");
});
router.delete("/:id", (req, res) => {
  res.send("유저 정보 삭제");
});

module.exports = router;
