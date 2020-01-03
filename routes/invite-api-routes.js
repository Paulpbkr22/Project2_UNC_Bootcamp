var db = require("../models");


module.exports = function(app) {

  app.post("/api/invite", function(req, res) {
    
    db.Invite.create(req.body).then(function(dbInvite){
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
