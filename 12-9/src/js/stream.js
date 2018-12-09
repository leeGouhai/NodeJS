//操作文件都需要引入fs模块
const fs = require("fs");

/*
 * fs.createReadStream:读取流
    *setEncoding()：设置读取编码格式
    *data事件：读取数据中
    *end事件：数据读取完毕 
*/

// 创建可读流
// 以流的方式读取about.txt中的内容
let readstream = fs.createReadStream("../about.txt");
// console.log(readstream);

// 设置编码为 utf8。
readstream.setEncoding('UTF8');

let data = ``;
/*处理流事件 --> (1)data, (2)end, and (3)error*/
//(1)
readstream.on("data",chunk=>{
    //chunk是文件的一个数据块
    data += chunk;
    // console.log(data);
});
//(2)
//程序执行完成后,就会执行end这里的代码
readstream.on("end",()=>{
    console.log(data);
    console.log("读取文件完毕");
});
//(3)
readstream.on("error", err=>{
    console.log(err.stack);
 });

/* fs.createWriterStream：写入流
    *write()方法：写入内容方法
    *end()方法：标记写入结束
    *finish事件：写入完成后执行
*/
//1、创建写入流
// var writerStream = fs.createWriteStream('output.txt', {'flags': 'a'}); //追加文本
let writestream = fs.createWriteStream("../output.txt");

//2、写入
// let data = '中国';

// 使用 utf8 编码写入数据
// writestream.write(data,'UTF8');
writestream.write("goodmorning\n",'UTF8');
writestream.write("goodafternoon\n",'UTF8');
writestream.write("goodnight,lee\n",'UTF8');

//3、标记
//标记文件末尾
writestream.end();

// 处理流事件 --> data, end, and error
writestream.on('finish', function() {
    console.log("写入完成。");
});

writestream.on('error', function(err){
   console.log(err.stack);
});
