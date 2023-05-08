const express=require('express')
const router=express.Router()
router.get('/',(req,res)=>{
  res.send("Service Page")
})


router.get('/new',(req,res)=>{
  res.render('service/new')
})

router.post('/',(req,res)=>{
  service.push({duration:req.body.duration,name:req.body.name,cost:req.body.cost})
  res.redirect(`/service/${service.length-1}`)
})

router.get('/:id',(req,res)=>{

  if(req.params.id<service.length){
    console.log(req.services.duration);
    res.send(`  Service Name:${req.services.name} ,Service Duration:${req.services.duration}, Service Cost:${req.services.cost}`)
    //res.json(service)
  }
  else{
    res.send("Service Not Found")
  }
})



const service=[
  {
    duration:10,
    name:'App development'
    ,cost:1000
  },
  {
    duration:12,
    name:'Web development'
    ,cost:1001
  },
  {
    duration:21,
    name:'Iot development'
    ,cost:1003
  },
  {
    duration:13,
    name:'Embedded system'
    ,cost:1004
  }
]
router.param('id',(req,res,next,id)=>{
  req.services=service[id];
  next();
})
module.exports=router;