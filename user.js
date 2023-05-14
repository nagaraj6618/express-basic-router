const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  //res.send("User Page")
  res.json(users)
})
router.post('/',(req,res)=>{
 
  users.push({name:req.body.name})
  res.redirect(`http://localhost:3000/user/${users.length}`);
})
router.get("/new",(req,res)=>{
  res.render('user/new')
})

router.get('/:id([0-9])',(req,res)=>{
// res.json(req.user)
if(req.params.id<users.length){
res.send(req.user)
}
 
else{
  res.send("Page Not Found")
}
})



const users=[{
  
  name:'Nagaraj'
},
{
  
  name:'Sakthivel'
},
{
  
  name:'Sureka'
},
{
  
  name:'Trisha'
},
{
  
  name:"Navya"
}]

router.param('id',(req,res,next,id)=>{
 req.user=users[id]
 next();
})
// const UsersArrayLength=users.length;
module.exports=router;