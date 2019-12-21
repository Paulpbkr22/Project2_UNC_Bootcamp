module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    freezeTableName: true
  });
  console.log("This is User: " + User);

 
  return User;
};
