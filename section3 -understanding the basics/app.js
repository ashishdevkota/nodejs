//import http functionality
const http=require('http');

const route=require('./route'); //importing from route.js 

const server=http.createServer(route.handler);
server.listen(3000);//listen port 3000