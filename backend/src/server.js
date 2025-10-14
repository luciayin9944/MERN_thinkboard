//server.js
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
// console.log(process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || 5001

connectDB();

// 使用子路由模块
// 所有以 "/api/notes" 开头的请求，交给 notesRoutes 处理
app.use("/api/notes", notesRoutes);

////other routes
////app.use("/api/products", productRoutes);

// 启动服务器，监听 5001 端口
app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});











// app.get("/api/notes", (request, response)=>{
//     response.status(200).send("you got 5 notes");
// });


// app.post("/api/notes", (req, res) =>{
//     res.status(201).json({message:"Note created successfully!"})
// });

// app.put("/api/notes/:id", (req, res)=>{
//     res.status(200).json({message:"Note updated successfully!"})
// });

// app.delete("/api/notes/:id", (req, res)=> {
//     res.status(200).json({message:"Note deleted successfully!"})
// });





