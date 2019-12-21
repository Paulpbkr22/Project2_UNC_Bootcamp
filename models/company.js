module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    // Giving the Author model a name of type STRING
    companyName: DataTypes.STRING
  },{
    freezeTableName: true

  }
  );
  console.log("This is Company: " +Company);
  Company.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Company.hasMany(models.Post, {
      onDelete: "cascade",
      foreignKey: "id",
      targetKey:"companyId",
      freezeTableName: true
    });
  };
 
  return Company;
};
// DewT%@!!9