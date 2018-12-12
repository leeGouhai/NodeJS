//

const express = require("express");
let app = express();


//路由
app.get("/",(req,res)=>{
    res.send("首页");
});

//商品列表页
app.get("/list",(req,res)=>{
    let category = req.query.category;
    //获取到get请求参数category(商品类别)
    //mysql语句:
    //let sql = `select * from goodslist where category = ${category}`;
    let goods;
    switch (category){
        case "phone":
            goods = [{gid:1,name:"ipone",price:8888},{gid:2,name:"huawei",price:6666}];
            break;
        case "computer":
            goods = [{gid:3,name:"mac",price:18888},{gid:4,name:"hp",price:16666}];
            break;
        default:
            goods = [];
    }
    res.send(goods);
});

//商品详情页
//动态路由:req.params
//gid是变量
app.get("/detail/:gid",(req,res)=>{
    let goodslist = [{gid:1,name:"ipone",price:8888},{gid:2,name:"huawei",price:6666},{gid:3,name:"mac",price:18888},{gid:4,name:"hp",price:16666}];
    let {gid} = req.params;//ES6的写法,相当于 let gid =req.params.gid;
    let goods = goodslist.filter(item=>item.gid==gid);
    goods = goods[0] ? goods[0]:"";
    res.send(goods);
});

//搜索功能
//获取get请求的参数：req.query
app.get("/search",(req,res)=>{
    //1、获取到关键字
    //2、根据关键字查询数据库
    //3、把结果返回给前端
    console.log(req.query);
    res.send("这是数据");
});

app.get("/cart",(req,res)=>{
    res.send("购物车");
});

app.post("/cart",(req,res)=>{
    res.send("cart");
});

app.listen(5557,()=>{
    console.log("server is running on http://localhost:5557");
});