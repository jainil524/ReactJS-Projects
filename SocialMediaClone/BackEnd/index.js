import express from "express"
import cors from "cors"
import "body-parser"

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/login",(req,res)=>{
    if(req.body.email === "jainil@gmail.com" && req.body.password === "1234"){
        res.json({message:"Login Successfull"});
    }else{
        res.json({message:"Login Failed"});
    }
})

app.listen(PORT,()=>{
    console.log(`Server Listening on: http://localhost:${PORT}`);
})