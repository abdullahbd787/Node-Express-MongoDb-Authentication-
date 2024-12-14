const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "Abdullah Al Mamun",
    email: "alalala@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Rakibul Islam",
    email: "alalala@gmail.com",
  },
];
module.exports = users;