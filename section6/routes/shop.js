const path=require('path') //using path module

const express=require('express');

const  rootDir=require('../util/path');

const router=express.Router();//creating router obj

router.get('/',(req,res,next)=>{
   res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports=router;