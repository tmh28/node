/**
 * Created by wuxueyong on 17/8/16.
 */
var http=require('http');
var fs=require('fs');
var querystring=require('querystring')




http.createServer(function(req,res){
    switch(req.url){
        case '/login':fs.readFile('login.html',function(err,data){
            if(err){
                console.log(err)
            }else{
                res.writeHeader(200,{'content-type':'text/html;charset:utf-8'});
               res.write(data);
               res.end();
            }
        });
        case '/tijiao':
            var data='';
            req.on('data',function(chunk){
                data+=chunk;
            });
            req.on('end',function(){
                console.log(querystring.parse(data))
            })
    }
}).listen(4001)