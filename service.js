const express=require('express')
const router=express.Router()




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

router.get('/',(req,res)=>{
  res.json(service)

})


router.get('/new',(req,res)=>{
  res.render('service/new')
})

router.post('/',(req,res)=>{
  service.push({duration:req.body.duration,name:req.body.name,cost:req.body.cost})
  res.status(200).json(service)
  //res.redirect(`/service/${service.length-1}`)
  res.redirect(`http://localhost:3000/Service/${service.length}`)
  
})

router.get('/:id',(req,res)=>{

  if(req.params.id<service.length){
    console.log(req.services.duration);
    //res.send(`  Service Name:${req.services.name} ,Service Duration:${req.services.duration}, Service Cost:${req.services.cost}`)
    //res.json(req.services)
    res.send(req.services)
  }
  else{
    res.send("Service Not Found")
  }
})

router.put('/:id',(req,res)=>{
  const id=req.params.id;
  if(id>service.length){
    res.status(404).json({status:false,message:"User not found"})
  }
  else{
    service[(id-1)]={duration:req.body.duration,name:req.body.name,cost:req.body.cost}
  }
  res.status(200).json({status:true,data:service})
})

router.delete('/:id',(req,res)=>{
  const id=req.params.id;
  if(id>service.length){
    res.status(404).json({status:false,message:"User not found"})
  }

  service.splice((id-1),1);
  res.status(200).json({status:true,data:service})

})

router.param('id',(req,res,next,id)=>{
  req.services=service[id];
  next();
})
module.exports=router;