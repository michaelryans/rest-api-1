'use strict';
const {hash} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };

  User.addHook('beforeSave', (user, options) => {
    // console.log('masuk hooks')
    user.password = hash(user.password);
  });


  return User;
};