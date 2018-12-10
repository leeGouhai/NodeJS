//服务器代理
/*Request
可用于发起 http 或 https 请求，可理解成服务端的 ajax 请求。可用于简单的服务器代理，用法和 ajax 类似。

安装： npm install request --save
*/

const request = require("request");//第三方模块
const http = require("http");

http.createServer((req, res) => {
    /**前端html是在12-8/src/html/test.html,所以属于跨域,需要我们创建一个静态资源服务器 */
    res.writeHead(200, { "Access-Control-Allow-Origin": "*" });//设置响应头,开放接口
    request.get("https://m.weibo.cn/api/config/list", (error, response, data) => {
        console.log(JSON.parse(data));
        res.end(data);//返回给前端的数据 
    });
    
}).listen(5556, () => {
    console.log("server is running on port 5556");
});

