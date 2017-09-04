/**
 * Created by wuxueyong on 17/8/16.
 */
var fs=require('fs');

/*fs.readFile('./静态页面.txt',{encoding:'utf8'},function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})*/

/*
var data=fs.readFileSync('./静态页面.txt',{encoding:'utf8'});
console.log(data)*/

/*
fs.writeFile('静态页面.txt','hello writeFile',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('success')
    }
})*/


/*var data=fs.writeFileSync('./静态页面.txt','hello writeFileSync');
console.log(data)  */    //输出undefined则成功了

/*fs.appendFile('./静态页面.txt','appendFile',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('追加式写文件成功')
    }
})*/

/*var data=fs.appendFileSync('./静态页面.txt','appendFileSync')
console.log(data)*/
/*
fs.stat('./静态页面.txt',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
*/

/*
var data=fs.statSync('./静态页面.txt');
console.log(data);*/


/*fs.unlink('./静态页面.txt',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('删除成功')
    }
})*/

/*
var data=fs.unlinkSync('./静态页面.txt');
console.log(data)*/

/*fs.mkdir('./静态页面.txt',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('创建目录成功了')
    }
})*/


/*
var data=fs.mkdirSync('静态页面');
console.log(data);*/
/*

fs.readdir('../nodea',function(err,files){
    if(err){
        console.log(err);
    }else{
        console.log(files)
    }
})*/


/*
var arr=[1,2,3];
var b=arr.map(function(num){
    return num*num;
})
console.log(b)*/

var score=[29,39,38,58,89]
var res=score.some(function(num){
    return num>=60;
})

console.log(res)