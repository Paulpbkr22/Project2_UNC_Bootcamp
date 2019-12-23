var db = require("../models");
module.exports = function(app) {
app.get("/", function(req, res) {
            db.Post.findAll({}).then(function(results) {
              res.json(results);
            });
          });
app.get("/api/post", function (req, res) {
    db.Post.findAll({}).then(function (results) {
        res.json(results);
    });
});

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


  app.put("/api/post", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
}