
const fs=require('fs');

const requestHandler=(req,res)=>{
const method=req.method;
const url=req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title> </head>');
        res.write('<body> <form action="/message" method="post"><input type="text" name="message"><button type="submit"> Send</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url==='/message' && method==='POST'){
        const body=[]; //creating empty array
        req.on('data',(chunk)=>{
            console.log(chunk)
          body.push(chunk);
        });
        return req.on('end',()=>{
         const parsedBody=Buffer.concat(body).toString();
         const message=parsedBody.split('=')[1];
         fs.writeFile('message.txt',message,(err)=>{
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
         }); //creating file message.txt then writing on it
         
        }); 
      

    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<h1>Hellow from node</h1>');
     res.write('</html>');
     res.end();

};

 //3 ways to export

// module.exports=requestHandler;

module.exports={
handler:requestHandler,
someText:'Some hard coded text'
}