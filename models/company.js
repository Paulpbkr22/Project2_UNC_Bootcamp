module.exports = function (sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    // Giving the Author model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false
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
