const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("전체트윗조회");
});
router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("특정트윗조회");
});
router.post("/", (req, res) => {
  res.send("트윗생성");
});
router.put("/:id", (req, res) => {
  res.send("트윗 내용 수정");
});
router.delete("/:id", (req, res) => {
  res.send("트윗 내용 삭제");
});
module.exports = router;
