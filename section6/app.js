const path=require('path'); //path module reg

const express=require('express');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

const bodyParser=require('body-parser');

const app=express();//create app obj

app.use(bodyParser.urlencoded({extended: false}));//register parser
app.use(express.static(path.join(__dirname,'public')));// register middilware  //to directly  serve file statically

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
   res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});// register 404 error page

app.listen(3000);//listen port 3000