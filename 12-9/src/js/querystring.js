/*querystring模块： 查询字符串处理模块
 *用于处理url地址中的参数信息

 * querystring模块可以解析网址参数(字符串)为对象（parse方法）,
 *当然也有反过程（stringify方法）;
 *url模块也有类似方法
 */
const qs = require("querystring");
const url = require("url");

let qsStr = 'firstname=Gouhai&url=http%3A%2F%2FleeGouhai.com&lastname=lee&passowrd=123456';
let qsObj = { firstname: 'Gouhai',url: 'http://leeGouhai.com',lastname: 'lee',passowrd: '123456' };
let obj = qs.parse(qsStr);
console.log("字符串转对象:",obj);
let str = qs.stringify(qsObj);
console.log("对象转字符串:",str);


/*
let urlObj = url.parse('http://www.laoxie.com/one?a=index&t=article&m=default#laoxie', true).query;
console.log("urlObj:",urlObj);
*/