/**解压文件 */

const fs = require("fs");
const zlip = require("zlib");//内置模块
 
/** 
 * 读取压缩包
 * events模块、stream流、管道流、压缩解压(zlib模块)
*/
//创建读取流
let readStream = fs.createReadStream("../myregion.json.zip");
let writeStream = fs.createWriteStream("myregion.json");

readStream.pipe(zlip.createGunzip())//调取zlib模块的解压方法
          .pipe(writeStream);//存放解压文件到指定位置