const mong = require("mongoose");

const schema = mong.Schema;
const userModel = new schema({
  name: String,
  email: String,
  number: Number,
});

const User = mong.model("UserModel", userModel);

module.exports = User;
