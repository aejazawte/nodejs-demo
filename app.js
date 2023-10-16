var express = require("express");
var app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    return res.send("Hello World");
});

app.listen(PORT, ()=> {
    console.log("Listening on port: " + PORT);
});
