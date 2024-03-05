import express from "express"

const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    res.end("Hello World");
})

app.listen(PORT,()=>{
    console.log(`Server Listening on: http://localhost:${PORT}`);
})