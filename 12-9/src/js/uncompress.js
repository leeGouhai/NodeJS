/**解压文件 */

const fs = require("fs");
const zlip = require("zlib");//内置模块
 
/** 
 * 读取压缩包
 * 
*/
//创建读取流
let readStream = fs.createReadStream("../myregion.json.zip");
let writeStream = fs.createWriteStream("myregion.json");

readStream.pipe(zlip.createGunzip())//调取zlib模块的解压方法
          .pipe(writeStream);//存放解压文件到指定位置