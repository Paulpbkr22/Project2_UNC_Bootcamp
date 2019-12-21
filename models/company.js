module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    
  }, {
    freezeTableName: true

  }
  );
  // console.log("This is User: " + User);
  Company.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Company.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
 
  return Company;
};
// DewT%@!!9
// var User = sequelize.define("User", {
//   // Giving the Author model a name of type STRING
//   name: DataTypes.STRING,
  
// }, {
//   freezeTableName: true

// }
// );