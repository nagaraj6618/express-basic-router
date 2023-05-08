const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  res.send("Service Page")
})

router.get('/:id',(req,res)=>{
const pageId=Number(req.params.id);
  const serviceId=service.find((ser)=>ser.id===pageId);
  if(!serviceId){
    res.send("Service Not Found")
  }
  else{
    res.json(service[pageId])
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
module.exports=router;