module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    // Giving the Author model a name of type STRING
    companyName: DataTypes.STRING
  });
  console.log("This is Company: " +Company);

  Company.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    models.Company.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return Company;
};
