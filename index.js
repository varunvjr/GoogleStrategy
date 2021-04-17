const express=require("express");
const app=express();
const PORT=8000;
app.get("/",(req,res)=>{
    res.send("Welcome to google auth");
})
app.listen(PORT,()=>{
    console.log(`Server starting at port :${PORT}` );
})