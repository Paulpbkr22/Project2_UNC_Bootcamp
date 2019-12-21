require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");
console.log(db)
var Company = db.Company;
var User = db.User;
var Post = db.Post;
User.associate = function(models) {
  // Associating Author with Posts
  // When an Author is deleted, also delete any associated Posts
  User.belongsTo(models.Post, {
    onDelete: "cascade",
    foreignKey : 'id',
    targetKey: 'userId'
  });
};
Company.associate = function(models) {
  // Associating Author with Posts
  // When an Author is deleted, also delete any associated Posts
  Company.hasMany(models.Post, {
    onDelete: "cascade",
    foreignKey: "id",
    targetKey:"companyId",
    freezeTableName: true
  });
};
Post.associate = function(db) {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  // console.log("line 42 "+typeof models.Company);
  Post.hasMany(Company, {
    foreignKey: 'id',
    sourcekey: 'companyId'
  
    });
  Post.hasMany(User, {
      foreignKey: 'id',
      sourceKey: 'userId'
  })
};

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
