//
// var db = require("../models");
// module.exports = (sequelize, DataTypes) => {
//   const UserTask = sequelize.define('UserTask', {
//         userId: DataTypes.INTEGER,
//         taskId: DataTypes.INTEGER
//   }, {});

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    userId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    freezeTableName: true
  },  {});
  console.log("This is Post: " + Post);
  
  // User.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   User.belongsTo(models.Post, {
  //     onDelete: "cascade",
  //     foreignKey : 'id',
  //     targetKey: 'userId'
  //   });
  // };
  
  
  return Post;
  
};

// module.exports = (sequelize, DataTypes) => {
//   const UserTask = sequelize.define('UserTask', {
//         userId: DataTypes.INTEGER,
//         taskId: DataTypes.INTEGER
//   }, {});

//   UserTask.associate = function(models) {
//     UserTask.hasMany(models.Task, {
//         foreignKey : 'id',
//         sourceKey: 'taskId'
//     });
//     UserTask.hasMany(models.User, {
//         foreignKey : 'id',
//         sourceKey: 'userId'
//     })
//   };
//   return UserTask;
// };
