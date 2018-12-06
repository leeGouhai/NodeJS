let person = {
    name : "lee",
    age : 18,
    sex : "male"
}
//利用module.exports 对外暴露接口
//一个文件只能有一个module.exports，多个会被覆盖
// module.exports = person;

exports.setName = ()=>{
    return "leegouhai";
}

exports.setAge = (age = 19)=>{
    return person.age = age;
} 