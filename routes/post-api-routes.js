var db = require("../models");
module.exports = function(app) {
// Route for displaying all posts when the user is logged in for the trending or infinite scroll page
app.get("/", function(req, res) {
            db.Post.findAll({}).then(function(results) {
              res.json(results);
            });
          });
// Route for finding all posts for a certain user
app.get("/api/post", function (req, res) {
    db.Post.findAll({}).then(function (results) {
        res.json(results);
    });
});
// Route for finding a specific psot
app.get("/api/post/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

// Route for updating a post
  app.put("/api/post/:id", function(req, res) {
    db.Post.update({

      body: req.body.body,},
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.post("/api/post", function(req, res){
    console.log("line 42 in post.js" +req.body);
    db.Post.create({
        title: req.body.title,
        body: req.body.body,
        UserId: req.body.userId,
        CompanyId: req.body.companyId
        
      }).then(function(dbUser) {
        // console.log(dbUser);
        res.json(dbUser);
    });
  });
}