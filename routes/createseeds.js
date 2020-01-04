var create = require("../seeders/20191223212251-demo--user");
module.exports = function(app){
app.post("/createseeds", function(req, res){
    create.createSeeds(req, function(dbInvite){

        
        res.send(dbInvite);


    });
});
}