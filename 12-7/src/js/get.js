const http = require("http");
const url = require("url");

http.createServer((req,res)=>{
    res.end("sssssss");
    // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    // const params = url.parse(req.url,true).query;
    // res.end(params);
    // const urlObj =  url.parse(req.url);
    // let pathName = urlObj.pathname;
    // switch (pathName){
    //     case '/home':
    //         res.end('首页');
    //         break;
    //     case '/list':
    //         res.end('列表页');
    //         break;
    //     default:
    //         res.end(`您要访问的页面${req.url}不存在`);
    // }
}).listen(3499,()=>{
    console.log("服务器启动成功,端口号为3499");
});
