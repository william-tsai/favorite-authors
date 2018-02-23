var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(express.static(__dirname + "/quote-rank-app/dist"));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/favoriteAuthorsNg");

var Schema = mongoose.Schema;
var authorSchema = new Schema({
    name: {type: String, required: true, minlength: 3, default: ""}
}, {timestamps: true});
mongoose.model("Author", authorSchema);
var Author = mongoose.model("Author");
mongoose.Promise = global.Promise;

app.get("/api/authors", function(request, response) {
    Author.find({}).sort("name").exec(function(err, authors) {
        if (err) {
            console.log("Error:", err);
            response.json(err);
        } else {
            console.log("All authors:", authors);
            response.json(authors);
        };
    });
});

app.post("/api/authors", function(request, response) {
    var newAuthor = new Author({
        name: request.body.name
    });
    newAuthor.save(function(err) {
         if (err) {
             response.json(err);
         } else {
             response.json({message: "New author saved!"});
         };
    });
})

app.all("*", function(request, response) {
    response.sendFile(path.resolve(__dirname + "/quote-rank-app/dist/index.html"))
});

app.listen(8000, function() {
    console.log("Listening on port 8000");
})