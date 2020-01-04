// var md5 = require("md5");
var shortid = require("shortid");


module.exports = function(sequelize, DataTypes){
    var Invite = sequelize.define("Invite", {
        // hash: {
        //     type: DataTypes.STRING,
        //     unique: true
        // },
        hash:{
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: shortid.generate(),
            unique: true
        },
        user: DataTypes.STRING,
        beenUsed:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {freezeTableName: true
    });
    Invite.associate = function(models){
        Invite.belongsTo(models.User, {
            onDelete:"cascade",
            foreignKey:{
                allowNull: true
            }
        });
    }
    return Invite;
}









// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//       // Giving the Author model a name of type STRING
//       name: DataTypes.STRING,
      
//     }, {
//       freezeTableName: true
  
//     });
//     console.log("This is User: " + User);
//     User.associate = function(models) {
//       // Associating Author with Posts
//       // When an Author is deleted, also delete any associated Posts
//       User.hasMany(models.Post, {
//         onDelete: "cascade"
//       });
//     };
   
//     return User;
//   };

  
