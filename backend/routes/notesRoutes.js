//notesRoutes.js
import express from "express";

// 1. 创建一个路由对象（子路由）
const router = express.Router();


// 2. 定义不同的 HTTP 路由处理函数
router.get("/", (req, res) => {
  res.status(200).send("you got 30 notes");
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "Note created successfully!" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: "Note updated successfully!" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted successfully!" });
});

export default router;


// import express from "express";

// const router = express.Router();

// router.get("/", (request, response) => {
//     response.status(200).send("you got 20 notes");
// });

// router.post("/", (req, res) => {
//     res.status(201).json({message:"Note created successfully!"})
// });

// router.put("/:id", (req, res) => {
//     res.status(200).json({message:"Note updated successfully!"})
// });

// router.delete("/:id", (req, res) => {
//     res.status(200).json({message:"Note deleted successfully!"})
// });

// export default router;