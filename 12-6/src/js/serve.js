//原生模块，nodeJS自带的模块，不需要安装，直接引用
// const 声明常量,不能修改
const http = require("http");
const url = require("url");
// console.log(http);

let app = http.createServer(function(request,response){
    //设置响应头Content-Type,告诉浏览器相应内容的类型
    response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    // response.write("hello,leegouhai");
    // response.write("<h1>hello,hide on bush</h1>");
    // console.log(request.url);
    // console.log(url.parse(request.url,true));
    let params = url.parse(request.url,true).query;
    console.log("params:",params);
    switch(request.url){
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
            response.end(`您访问的页面${request.url}不存在`);
    }
    
    //标记响应结束
    // response.end("<p>hello,ladies and gentlemen,gameover</p>");
});

//配置监听端口
app.listen(3006,()=>{
    console.log("服务器启动成功，端口为3006");
});