var md = require("md5");



module.exports = function(sequelize, DataTypes){
    var Invite = sequelize.define("Invite", {
        hash: DataTypes.STRING,
        user: DataTypes.STRING,
        beenUsed: DataTypes.BOOLEAN
    }, {freezeTableName: true
    });
    Invite.associate = function(models){
        Invite.belongsTo(models.User, {
            onDelete:"cascade"
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

  
