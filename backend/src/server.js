//server.js
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

// 使用子路由模块
// 所有以 "/api/notes" 开头的请求，交给 notesRoutes 处理
app.use("/api/notes", notesRoutes);

////other routes
////app.use("/api/products", productRoutes);

// 启动服务器，监听 5001 端口
app.listen(5001, () => {
  console.log("Server started on PORT:5001");
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





