var Company = require("../models/company");
var User = require("../models/user");

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Posts", {
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
    }
  });
  console.log("This is Post: " + Post);

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    models.User.belongsToMany(models.Company, {
      through: Post
    
      });
    models.Company.belongsToMany(models.User, {
        through: Post
    })
  };
  return Post;
  
};
