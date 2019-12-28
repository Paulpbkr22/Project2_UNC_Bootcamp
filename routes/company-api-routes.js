var db = require("../models");

module.exports = function(app) {
  app.get("/api/company", function(req, res) {
    // Route for displaying all posts for a certain compay
    db.Company.findAll({
      include: [db.Post]
    }).then(function(dbCompany) {
      res.json(dbCompany);
    });
  });

  app.get("/api/company/:id", function(req, res) {
    
    db.Company.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbCompany) {
      res.json(dbCompany);
    });
  });
// Route for creating a company
  app.post("/api/company", function(req, res) {
    db.Company.create({
      name: req.body.name})
      .then(function(dbCompnay) {
      res.json(dbCompnay);
    });
  });

 

};