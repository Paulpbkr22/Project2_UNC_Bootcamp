var db = require("../models");
var shortid = require("shortid");

module.exports = function(app) {

  app.post("/api/invite", function(req, res) {
    let invite = req.body;
    invite.hash= shortid.generate();
    db.Invite.create(invite).then(function(dbInvite){
        // console.log(dbInvite.hash);
        res.json(dbInvite);
      }).catch(function(err){
          if (err) throw err;
          res.send("failure");
      })
  });

//   app.post("/api/invite/:id", function(req, res) {
//     db.Invite.create(req.body.id).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });

};
