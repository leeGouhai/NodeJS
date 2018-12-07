//图片读取

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

http.createServer((req,res)=>{
    let pathName = url.parse(req.url).pathname;// /img/001.jpg
    //获取绝对路径(),用于读取图片内容
    //C:\H5-1809\NodeJS\12-7\src\img\001.jpg
    let realPath = path.join((__dirname).slice(0,-2),pathName);
    //__dirname 当前js文件的路径C:\H5-1809\NodeJS\12-7\src\js
    // console.log("__dirname:",typeof(__dirname),__dirname,(__dirname).slice(0,-2));
    // console.log("pathName:",pathName);
    // console.log("realPath:",realPath);
    fs.readFile(realPath,(err,data)=>{ 
        try {
            res.writeHead(200,{"Content-Type":"image/jpeg"});
            res.end(data);
        } catch (error) {
           console.log(err);  
        }             
        
    });
}).listen(5555,()=>{
    console.log("server is running on port 5555");
});