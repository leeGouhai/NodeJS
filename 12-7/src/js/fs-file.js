//同步
const fs = require('fs');

//异步读取文件 fs.readFile(path,callback);
//异步
fs.readFile("../about.text",(err,data)=>{
    try {
        console.log("data:",data.toString());
    } catch (error) {
        throw Error("error",err);
    }
});

//异步写入文件,会更新并覆盖原来的内容
// fs.writeFile("../about.text","good luck!leegouhai\n",(err)=>{
//     try {
//         console.log("写入成功！");
//     } catch (err) {
//         throw Error("写入失败~");//如果出错会抛出错误详细位置,比console.erro()好
//     }
// });

//追加形式写入文件

// fs.appendFile("../about.text","god bless you!",(err)=>{
//     try {
//         console.log("追加写入成功!");
//     } catch (error) {
//         throw Error("写入失败~~");
//     }
// });
