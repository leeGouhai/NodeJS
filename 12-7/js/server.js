//原生模块 http,url
//利用nodejs创建http服务器
//在这里我安装了supervisor,实现了保存即重启服务器的功能


//引入模块
const http = require('http');
const url = require('url');

//创建服务器
http.createServer((request, response)=>{
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    const urlObj =  url.parse(request.url);
    console.log(urlObj);
    let pathName = urlObj.pathname;
    let params = urlObj.query;
    console.log(params);
    switch (pathName){
        case '/home':
            response.end('首页');
            break;
        case '/list':
            response.end('列表页');
            break;
        case '/detail':
            response.end('详情页');
            break;
        case '/cart':
            response.end('购物车');
            break;
        default:
            response.end(`您要访问的页面${request.url}不存在`);
    }
    response.end('hello,lee');
}).listen(3008,()=>{
    console.log('启动服务器成功,端口号为3008');
});
