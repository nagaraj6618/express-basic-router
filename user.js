const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  res.send("User Page")
})

router.get('/:id([0-9])',(req,res)=>{
// res.json(req.user)
if(req.params.id<users.length){
res.send(req.user.name)
}
 
else{
  res.send("Page Not Found")
}
})


const users=[{
  idno:1,
  name:'Nagaraj'
},
{
  idno:2,
  name:'Sakthivel'
},
{
  idno:3,
  name:'Sureka'
},
{
  idno:4,
  name:'Trisha'
},
{
  idno:5,
  name:"Navya"
}]

router.param('id',(req,res,next,id)=>{
 req.user=users[id-1]
 next();
})
// const UsersArrayLength=users.length;
module.exports=router;