module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    // Giving the Author model a name of type STRING
    companyName: DataTypes.STRING,
    freezeTableName: true
  });
  console.log("This is Company: " +Company);
 
 
  return Company;
};
// DewT%@!!9