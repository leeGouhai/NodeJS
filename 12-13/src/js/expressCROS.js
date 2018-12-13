//express跨域资源请求

const express = require("express");
const bodyParser = require("body-parser");

//创建服务器
let app = express();

/** 跨域支持
 *     把这个路由配置放在所有路由的前面，方便调用next操作
*/
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

//引入express的中间件,创建静态路由

app.use(express.static("../"));

app.get("/",(req,res)=>{
    res.send("这是首页");
});

app.get("/list",(req,res)=>{
    //前端网址(get请求)是这样的:http://localhost:5557/list?category=phone
    //获取到get请求方式的参数category,根据参数向数据库查询出相应数据
    /**mysql语句:
     *          "select * from goodslist where category = ${category}";
     */
    let category = req.query.category;
    //假数据
    // let goodslist = [
    //     {gid:1,enterprise:"Apple",name:"iponeXS",price:"9889"},
    //     {gid:2,enterprise:"huawei",name:"Mata20",price:"6998"}
    // ];
    let goodslist;
    switch (category){
        case "phone":
            goodslist = [{gid:1,enterprise:"Apple",name:"iponeXS",price:"9889"},{gid:2,enterprise:"huawei",name:"Mata20",price:"6998"}];
            break;
        case "computer":
            goodslist = [{gid:3,enterprise:"lenovo",name:"T430",price:"19889"},{gid:4,enterprise:"hp",name:"14-CE0027TX",price:"16998"}];
            break;
        default:
            goodslist = [];
    }
    res.send(goodslist);
});

//商品详情页
//动态路由:req.params

app.get("/detail/:gid",(req,res)=>{
    //假数据
    let goodslist = [{gid:1,enterprise:"Apple",name:"iponeXS",price:"9889"},{gid:2,enterprise:"huawei",name:"Mata20",price:"6998"},{gid:3,enterprise:"lenovo",name:"T430",price:"19889"},{gid:4,enterprise:"hp",name:"14-CE0027TX",price:"16998"}];
    //let gid = req.params.gid;
    let {gid} = req.params;
    console.log(gid);
    let goods = goodslist.filter(item=>gid == item.gid);
    goods = goods[0]?goods[0]:[];
    res.send(goods);
});

app.listen(5558,()=>{
    console.log("server is running on port:5558");
});