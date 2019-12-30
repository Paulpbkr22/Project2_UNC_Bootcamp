var db = require("../models");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    
    db.User.findAll({
      where: {
        id: id
      },
      include: [db.Post]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

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
// Route for creating a new user
  app.post("/api/user", function(req, res) {
    db.User.create({
      email: req.body.email,
      name: req.body.name,
      jobTitle: req.body.jobTitle
      
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};