/*引入模块*/
const events = require("events");

/*实例化一个事件实例*/
let eventEmitter = new events.EventEmitter();
/*绑定事件及其处理函数*/
eventEmitter.on("connection",()=>{
    try {
        console.log("连接成功");
        /*通地 emit 方法触发事件 emit(eventname)*/
        eventEmitter.emit("reaction");
    } catch (error) {
        console.log("连接失败");
    }
});

eventEmitter.on("reaction",()=>{
    try {
        console.log("启动成功");
    } catch (error) {
        console.log("启动失败");
    }
});

setTimeout(()=>{
    eventEmitter.emit("connection");
    console.log("程序执行完毕");
},5000);
