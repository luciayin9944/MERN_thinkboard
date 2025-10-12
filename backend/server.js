import express, { response } from "express";

const app = express();

app.get("/api/notes", (request, response)=>{
    response.send("you got 5 notes");
});

app.listen(5001, () =>{
    console.log("Server started on PORT:5001")
});