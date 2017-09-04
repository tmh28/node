
/*const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
const url = require("url");
const querystring = require("querystring");
const path = require("path");

http.createServer(function (req, res) {

    switch (req.url){
        case "/":
        case "/index":  // 首页面

            var file = path.join(__dirname,"indexa.html");
            console.log(file);

            var datas = fs.readFileSync(file,"utf8");

            // 需要从blog.txt中读数据
            var blogData = fs.readFileSync("blog.txt");
            var posts = JSON.parse(blogData);
            var html = ejs.render(datas,{data:posts});
            res.end(html);

            break;
        case "/save":  // 处理表单提交
            var str = "";
            req.on("data",function (chunk) {
                str += chunk;
            });
            req.on("end",function () {
                var obj = querystring.parse(str);
                var post = {
                    title:obj.title,
                    author:obj.author,
                    content:obj.content,
                    time:new Date().toLocaleString()
                };
                if (fs.existsSync("blog.txt")){
                    // 存在  先取出blog.txt中的内容，转成对象，放入数组中
                    var str1 = fs.readFileSync("blog.txt","utf-8");
                    var arr = JSON.parse(str1);
                }else{
                    // 不存在
                    var arr = [];
                }
                arr.push(post);
                // 再将arr转成字符串，覆盖式的写到blog.txt中
                fs.writeFile("blog.txt",JSON.stringify(arr),function (err) {
                    if (err){
                        console.log(err);
                    }else {
                        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                        res.end("<h2>发表成功！ <a href='/'>返回</a>返回</h2>");
                    }
                })
            })

            break;
        default:
            // 处理图片，css, js
            var file = path.join(__dirname + req.url);
            if (fs.existsSync(file) && fs.statSync(file).isFile()){
                res.end(fs.readFileSync(file));
            }
            break;
    }

}).listen(3005);*/

/*
var http=require('http');
var fs=require('fs');
var path=require('path');
var querystring=require('querystring');
var ejs=require('ejs');
http.createServer(function(req,res){
    switch(req.url){
        case '/':
        case '/index':
            var file=path.join(__dirname,'index.html');
            var datas=fs.readFileSync(file,'utf8');

            var blogdata=fs.readFileSync('blog.txt')
            var posts=JSON.parse(blogdata)
            var html = ejs.render(datas,{data:posts});
            res.end(html);
            break;
        case "/save":  // 处理表单提交
            var str = "";
            req.on("data",function (chunk) {
                str += chunk;
            });
            req.on("end",function () {
                var obj = querystring.parse(str);
                var post = {
                    title:obj.title,
                    author:obj.author,
                    content:obj.content,
                    time:new Date().toLocaleString()

                };


                if (fs.existsSync("blog.txt")){
                    var str1 = fs.readFileSync("blog.txt","utf-8");
                    var arr = JSON.parse(str1);
                }else{
                    var arr = [];
                }
                arr.push(post);
                console.log(arr);
                fs.writeFile("blog.txt",JSON.stringify(arr),function (err) {
                    if (err){
                        console.log(err);
                    }else {
                        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                        res.end("<h2>发表成功！ <a href='/'>返回</a></h2>");
                    }
                })
            })

            break;
        default:
            var file=path.join(__dirname,req.url)
            if(fs.existsSync(file) && fs.statSync(file).isFile()){
                var data=fs.readFileSync(file);
                res.statusCode=200
                res.end(data);
            }
            break;

    }
}).listen(4007)
*/

var http=require('http');
var fs=require('fs');
var path=require('path');
var ejs=require('ejs');
var querystring=require('querystring')
http.createServer(function(req,res){
 switch(req.url){
     case '/':
     case '/index.html':
         var file=path.join(__dirname,'index.html')
         var data=fs.readFileSync(file,{encoding:'utf8'})
         res.writeHeader(200,{"content-type":'text/html;charset:utf-8'});

         var blogdata=fs.readFileSync('blog.txt',{encoding:'utf8'});
         var posts=JSON.parse(blogdata);
         var html=ejs.render(data,{data:posts})
         res.end(html)
         break;
     case '/save':
         var str='';
         req.on('data',function(chunk){
             str+=chunk;
         });
         req.on('end',function(){
             console.log(str);
             var str1=querystring.parse(str);
             var newarr={
                 content:str1.content,
                 title:str1.title,
                 author:str1.author,
                 time:new Date().toLocaleString()
             }
             if (fs.existsSync("blog.txt")){
                 //存在
                 var post=JSON.parse(fs.readFileSync('blog.txt',{encoding:'utf8'}));
                 var arr=post;
             }else{
                 //不存在
                 var arr=[]
             }
             arr.push(newarr);
             fs.writeFile('blog.txt',JSON.stringify(arr),function(err){
                 if(err){
                     console.log(err)
                 }else{
                     res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
                     res.end("<h2>发表成功！ <a href='/'>返回</a></h2>");
                 }
             })
         });
         break;
     default:
         var file=path.join(__dirname,req.url)
         if(fs.existsSync(file)&&fs.statSync(file).isFile()){
            /* res.writeHeader(200,{"content-type":'text/html;charset:utf-8'});*/  //读取图片和外部文件的时候
                                // 这样写不会加载出来，必须像下面这样写
             res.statusCode=200;
             res.end( fs.readFileSync(file))
         }
      break;
 }
}).listen(3004)

