/** 压缩文件*/
const fs = require("fs");
//引入压缩解压模块
const zlip = require("zlib");

//压缩myregion.json文件为myregion.zip

//1、以流的方式读取文件
fs.createReadStream("../data/myregion.json")
    .pipe(zlip.createGzip())//2、调取zlip模块压缩读取出来的文件
    .pipe(fs.createWriteStream("../myregion.json.zip"));//3、保存压缩的文件到指定位置

