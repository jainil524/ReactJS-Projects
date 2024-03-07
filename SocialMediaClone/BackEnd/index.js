import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/login",(req,res)=>{
    if(req.body.email === "jainil@gmail.com" && req.body.password === "Jainil@1234"){
        res.json({success:"Login Successfull",username: "Jainil Prajapati"});
    }else{
        res.json({error:"Login Failed"});
    }
})

app.listen(PORT,()=>{
    console.log(`Server Listening on: http://localhost:${PORT}`);
})

