/** 浏览器的Content-Type不能识别的话就会自动下载该文件*/

//引入模块
const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");

//创建服务器
http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;
    let realpath = path.join((__dirname).slice(0,-2),pathname);
    console.log("pathname:",pathname);// /img/004.jpg
    console.log("realpath:",realpath);// C:\H5-1809\NodeJS\12-10\src\img\004.jpg

    fs.readFile(realpath,(err,data)=>{
        try {
            //响应头
            res.writeHead(200,{"Content-Type":"zlib/zlib"});//Content-Type不能识别
            res.end(data);
        } catch (error) {
            console.log(err);
        }
    });

    
}).listen(5555,()=>{
    console.log("server is running on port 5555");
});


