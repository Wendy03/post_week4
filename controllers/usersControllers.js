const successHandler = require('../service/successHandler');
const errorHandler = require('../service/errorHandler');

const User = require('../models/usersModel');

const users = {
  async getUser(req, res) {
    const users = await User.find();
    successHandler(res, users);
  },
  async createUser(req, res) {
    try {
      const { name, email, password, photo } = req.body;
      if (name || email || password) {
        const newUser = await User.create({
          name,
          email,
          password,
          photo,
        });
        successHandler(res, newUser);
      } else {
        errorHandler(res, '姓名、E-mail、密碼必填');
      }
    } catch (err) {
      errorHandler(res, '資料錯誤');
    }
  },
};

module.exports = users;
