const info = require("./student");

console.log(info.getName());
console.log(info.getAge());
console.log(info.point);

const { getName } = require("./student");
console.log(getName());
