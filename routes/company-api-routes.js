var db = require("../models");

module.exports = function(app) {
  // app.get("/api/company", function(req, res) {
  //   // Route for displaying all posts for a certain compay
  //   db.Company.findAll({
  //     include: [db.Post]
  //   }).then(function(dbCompany) {
  //     res.json(dbCompany);
  //   });
  // });

  app.get("/api/company/:name", function(req, res) {
    console.log('inside get');
    console.log(req.params.name);
    db.Company.findAll({
      where: {
        name: req.params.name
      },
      include: [db.Post]
    }).then(function(dbCompany) {
      res.json(dbCompany);
    });
  });
// Route for creating a company
  app.post("/api/company", function(req, res) {
    console.log("requested");
    db.Company.create({
      name: req.body.name}
      )
      .then(function(dbCompany) {
      res.json(dbCompany);
    }).catch(function(err){
      if (err) throw err;
      res.send("failure");
  });
  });

 

};