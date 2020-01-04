'use strict';
var db = require("../models");
var shortid = require("shortid");
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
// db.Post.create({
//         title: "best place",
//         body: "best place to work",
//         UserId: 1,
//         CompanyId: 22
        
//       }).then(function(results){
//   console.log(results);
  db.Invite.create({
    hash: shortid.generate(),
    beenUsed: false,
    UserId: 1,
  }
    ).then(function(dbInvite){
    // console.log(dbInvite.hash);
    console.log(dbInvite)
});
