/**
 * Created by wuxueyong on 17/8/16.
 */
var http=require('http');
var fs=require('fs');


var server=http.createServer(function(req,res){
    console.log(req.url)    //当我在地址栏输入localhost:5000/indx.html时，代表此时我要访问index.html
                             //此时我引入了外部的index.css和index.js还有图片，它都会一一的请求服务器，
                             //这时req.url会是/indexa.html 、indexa.css /indexa.js /01.png
    var dir=__dirname+req.url;
   fs.readFile(dir,function(err,data){
       if(err){
           console.log(err)
       }else{
           res.statusCode=200;
           res.write(data);
           res.end();
           console.log('success')
       }
   })
})
//server.on('request',function(req,res){

//})
server.listen(4000);