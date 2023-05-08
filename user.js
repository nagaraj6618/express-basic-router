const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  res.send("User Page")
})

router.get('/:id([0-9])',(req,res)=>{
const pageId=Number(req.params.id)
const userId=users.find((user)=>(user.idno-1)===pageId)

if(!userId){
  res.send('Page Not Found')
}
else{
  res.json(users[req.params.id])
}
  // if(req.params.id<=UsersArrayLength){
  //   res.json(users[req.params.id-1])
  //  res.send(`User Name for this id ${users[req.params.id-1].idno} is ${users[req.params.id-1].name}`)
  // }
  // else{
  //   res.send("Wrong id")
  // }
  // // res.send(`List of Users ${req.params.id}`)
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
}]

// const UsersArrayLength=users.length;
module.exports=router;