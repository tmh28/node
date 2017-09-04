/**
 * Created by wuxueyong on 17/8/18.
 */
var path=require('path')
var bodyParser=require('body-parser');
//第一步，载入第三方的express模块
var express=require('express');
//第二步，创建一个express 应用
var app=express();
//第三部，实现路由
app.get('/',function(req,res){
    res.sendFile(__dirname+'/form.html')   //加载静态页面
})

//获取post提交的参数
/*app.post('/a',function(req,res){
var str='';
req.on('data',function(chunk){
    str+=chunk
});
req.on('end',function(){
    console.log(str);
})
})*/

//获取查询字符串，查询路径名
app.get('/user/list',function(req,res){
    console.log(req.query);
    console.log(req.path)
    res.send('<h1>查询字符串已经变成了对象形式的</h1>')
})

//内置中间件
app.use(express.static(path.join(__dirname,'public')))        //这是加载静态页面里面包含静态资源的时候，需要用到内置中间件express.static
app.get('/jintai',function(req,res){
    res.sendFile(path.join(__dirname,'express.html'));
})



//路由句柄
app.get('/jubing',function(req,res,next){
    console.log('路由句柄');
    next();
},function(req,res){
    console.log('上一个写next,我才能执行')
})


//应用级中间件
app.use(function(req,res,next){
    console.log('应用级中间件')
    next();                     //这里必须要写next();否则下面的res.send不起作用
})

app.get('/zhongjianjian',function(req,res){
    res.send('<h1>应用级中间件</h1>')
})


//json
app.get('/json',function(req,res){
    res.json({name:'lee'})
})


//redirect
app.get('/redirect',function(req,res){
    res.redirect('/json')
})

//download
app.get('/down',function(req,res){
    res.sendFile(path.join(__dirname,'express-download.html'))
})

app.get('/download',function(req,res){
    res.download(req.query.file)     //里面file对应的值必须是你要下载的文件的名字，因为download里面就是要下载的文件名
})

//第三方中间件

app.use(bodyParser.urlencoded({extended:false}))   //读取静态页面里面表单内容
app.use(bodyParser.json())                         //获取提交的内容,对象形式
app.get('/disanfang',function(req,res){
    res.sendFile(path.join(__dirname,'form.html'));

})
app.post('/a',function(req,res){
    console.log(req.body.username);
    console.log(req.body.pwd);
})
//第四部，实现路由
app.listen(3001)

