const express=require('express');
const app=express();
const userPage=require('./user')
const contactPage=require('./contact')
const aboutPage=require('./about')
const servicePage=require('./service')
app.get('/',(req,res)=>{
  res.send("Home Page");
})

app.use("/user",userPage)
app.use('/contact',contactPage)
app.use('/aboutus',aboutPage)
app.use('/service',servicePage)
app.listen(5000);