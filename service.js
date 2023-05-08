const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  res.send("Service Page")
})

router.get('/:id',(req,res)=>{

  if(req.params.id<service.length){
    res.send(req.services.name)
  }
  else{
    res.send("Service Not Found")
  }
})
const service=[
  {
    id:0,
    name:'App development'
  },
  {
    id:1,
    name:'Web development'
  },
  {
    id:2,
    name:'Iot development'
  },
  {
    id:3,
    name:'Embedded system'

  }
]
router.param('id',(req,res,next,id)=>{
  req.services=service[id];
  next();
})
module.exports=router;