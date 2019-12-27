var db = require("../models");

module.exports = function(app) {

  app.get("/api/user/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/invite/:id", function(req, res) {
    db.Invite.create(req.body.id).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};