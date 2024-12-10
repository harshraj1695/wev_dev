import express from "express";
const app = express();
app.get("/",(req, res)=>{
    res.send("Hii I am Harsh");
})
const port =3000;

app.listen(port,() =>{
    console.log("server running on port 3000.");
})