module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });
  console.log("This is User: " + User);

  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    models.User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return User;
};
