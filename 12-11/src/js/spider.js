//利用cherrio模块爬取网络上的图片

const cheerio = require("cheerio");
const request = require("request");
const http = require("http");
const path = require("path");
const fs = require("fs");

let url = "http://www.win4000.com/meitu.html"
request(url,(error,response,body)=>{
    // response.setEncoding("UTF8");
    // console.log(body);
    let $ = cheerio.load(body);
    // console.log($(".main .list_cont .tab_box ul li a img"));
    let res = $(".main .list_cont .tab_box li img").each((idx,ele)=>{
        let src = $(ele).attr("data-original");
        // console.log(src);
        let filename = path.basename(src);
        console.log(filename);
        //按网址请求图片,通过管道下载到本地
        request(src).pipe(fs.createWriteStream("../img/"+filename));
    });
});