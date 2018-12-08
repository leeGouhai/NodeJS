//路由

const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const mime = require("./mime");//根据后缀名找到相应的文件类型(自定义模块)

http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;// /index
    console.log("pathname:",pathname);
    
    let realPath;
    switch (pathname){
        case "/":
            realPath = path.join((__dirname).slice(0,-2),"index.html");
            break;
        case "/index":
            realPath = path.join((__dirname).slice(0,-2),"index.html");
            break;
        case "/reg":
            realPath = path.join((__dirname).slice(0,-2),"html/reg.html");
            break; 
        case "/login":
            realPath = path.join((__dirname).slice(0,-2),"html/login.html");
            break;
        case "/usncenter":
            realPath = path.join((__dirname).slice(0,-2),"html/usncenter.html");
            break;
        default :
            realPath = path.join((__dirname).slice(0,-2),pathname);
    }

    //解析出后缀名,以便浏览器解析内容 如(C:\H5-1809\NodeJS\12-8\src\img\001.jpg) -->jpg
    let ext = path.extname(realPath).slice(1);
    console.log("后缀名:",ext);
    //读取文件
    fs.readFile(realPath,(err,data)=>{
        try {
            res.writeHead(200,{"Content-Type":`${mime[ext]};charset=utf-8`});
            res.end(data);
        } catch (error) {
            console.log(err);
        }
    });

}).listen(5555,()=>{
    console.log("server is running on port 5555");
});