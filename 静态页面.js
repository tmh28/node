/**
 * Created by wuxueyong on 17/8/16.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring')

http.createServer(function(req,res){
    var u=url.parse(req.url);            //当我们的路径后面有查询字符串的时候需要解析查询字符串，否则会出错，

    console.log(querystring.parse(u.query));  //解析完查询字符串后可以通过u.query获得查询字符串，最后通过querystring
                                                //变成我们想要的对象的形式
    fs.readFile('./静态页面.txt',{encoding:'utf8'},function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.writeHeader(200,{'content-type':'text/html;charset=utf-8'});
            res.write(data);
            res.end();
        }

    })
    }
).listen(4002)
