const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  res.send("Service Page")
})


router.get('/new',(req,res)=>{
  res.render('service/new')
})

router.post('/',(req,res)=>{
  service.push({id:req.body.id,name:req.body.name,cost:req.body.cost})
  res.redirect(`/service/${service.length-1}`)
})

router.get('/:id',(req,res)=>{

  if(req.params.id<service.length){
    res.send(`Service Id:${req.services.id} , Service Name:${req.services.name} , Service Cost:${req.services.cost}`)
  }
  else{
    res.send("Service Not Found")
  }
})



const service=[
  {
    id:0,
    name:'App development'
    ,cost:1000
  },
  {
    id:1,
    name:'Web development'
    ,cost:1001
  },
  {
    id:2,
    name:'Iot development'
    ,cost:1003
  },
  {
    id:3,
    name:'Embedded system'
    ,cost:1004
  }
]
router.param('id',(req,res,next,id)=>{
  req.services=service[id];
  next();
})
module.exports=router;