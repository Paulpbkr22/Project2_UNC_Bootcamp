module.exports = function (sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    freezeTableName: true
  }
  );

  Company.associate = function (models) {
    Company.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return Company;
};
