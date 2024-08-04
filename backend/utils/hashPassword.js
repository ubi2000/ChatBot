const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  const salt = await bcrypt.getSalt(10);
  return await bcrypt.hash(password, salt);
};
module.exports = hashPassword;
