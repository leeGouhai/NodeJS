//文件操作都需要fs模块
const fs = require("fs");

/**
 * 管道流实现了大文件的复制过程。
 */
//创建一个读取流
let readStream = fs.createReadStream("../../doc/region.json");
//设置编码
// readStream.setEncoding("UTF8");

let data = ``;
/** 处理流事件 -->(1)"data" (2)"end" (3)"error"*/
//(1)
readStream.on("data",chunk=>{
    data += chunk;
    console.log("chunk:",chunk);//大文件会被分成块传输
});
//(2)
readStream.on("end",()=>{
    // console.log(data);//传输完成后才会到end事件执行
});
//(3)
readStream.on("error",(err)=>{
    // console.log(err.stack);
});

//创建一个写入流
let writeStream = fs.createWriteStream("../data/myregion.json");

// 管道读写操作
// 读取 region.json 文件内容，并将内容写入到 myregion.json 文件中
readStream.pipe(writeStream);