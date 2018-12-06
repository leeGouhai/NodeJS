//这里的JS不能在浏览器端运行
//只能在node环境(服务器端)下执行

let person = require("./js/person.js");

//对象解构
let {setName, setAge} = require("./js/person.js");

console.log(person,setName(),setAge());