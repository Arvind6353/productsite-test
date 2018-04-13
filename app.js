var express = require("express");
var app = new express();
var path = require("path");
app.use(express.static(path.join(__dirname,"public")))

app.listen(process.env.PORT || 5555, function(){
    console.log("started");
})