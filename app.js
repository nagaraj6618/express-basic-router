const express=require('express');
const app=express();
const userPage=require('./user')
app.get('/',(req,res)=>{
  res.send("Home Page");
})

app.use("/user",userPage)
app.listen(5000);