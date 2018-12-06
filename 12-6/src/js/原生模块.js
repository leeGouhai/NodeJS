var http = require('http');

http.createServer(function(request,response){
    response.end('服务器启动成功,端口号8080');
}).listen(8080);