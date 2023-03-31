
module.exports = function(app, obj, randomString, secretTokenNo) {

    app.get("/", function(req, res){
        res.render("home", {page:"main"});
    });

}