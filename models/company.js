module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    
  }, {
    freezeTableName: true

  }
  );
  
  Company.associate = function(models) {
    
    Company.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
 
  return Company;
};
