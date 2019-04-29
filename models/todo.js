'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };

  // Todo.belongsTo(models.User)
  return Todo;
};