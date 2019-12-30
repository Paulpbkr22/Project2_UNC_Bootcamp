

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    userId: DataTypes.STRING,
    companyId: DataTypes.STRING,
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
    },
 
  }, {
    freezeTableName: true

  }, {});
 
  
  Post.associate = function(db) {
  
    Post.belongsTo(db.Company, {
      foreignKey: {
        allowNull: true
      }
      });
    Post.belongsTo(db.User, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Post;
  
};



