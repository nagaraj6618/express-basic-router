const express=require('express');
const app=express();
const userPage=require('./user')
const contactPage=require('./contact')
const aboutPage=require('./about')
const servicePage=require('./service')


app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
  // res.send("Home Page");
  res.render('index',{text:"jii"})
})

app.use("/user",userPage)
app.use('/contact',contactPage)
app.use('/aboutus',aboutPage)
app.use('/service',servicePage)
app.listen(5000);