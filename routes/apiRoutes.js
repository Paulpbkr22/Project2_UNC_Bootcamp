// var db = require("../models");

// module.exports = function(app) {
//   // Get all posts for loading feeding
//   app.get("/api/Post", function(req, res) {
//     db.Post.findAll({}).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all posts for a specified company
//   app.get("/api/comapny/:name", function(req, res){
//     db.Company.findAll({
//       where:{
//         name:req.params.id
//       },
//       include: [db.Post]
//     }).then(function(results){
//       res.json(results);
//     })
//   });
//   // Get all posts for a specified user
//   app.get("/api/user/:name", function(req, res){
//     db.User.findALl({
//       where:{
//         name: req.params.name
//       }
//     })
//   });
// // upstate a post
//   app.put("/api/post", function(req, res){
//     db.Post.update(req.body,
//       {
//         where:{
//           id: req.body.id
//         }
//       })
//       .then(function(result){
//         res.json(result);
//       })
//   });


//   // app.post("/api/examples", function(req, res) {
//   //   db.Example.create(req.body).then(function(dbExample) {
//   //     res.json(dbExample);
//   //   });
//   // });

//   // // Delete an example by id
//   // app.delete("/api/examples/:id", function(req, res) {
//   //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//   //     res.json(dbExample);
//   //   });
//   // });
// };
