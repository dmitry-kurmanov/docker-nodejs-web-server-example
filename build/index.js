const http = require("http");

const server = new http.Server();
server.listen("9999");

var emit = server.emit;
server.emit = function(event) {
    console.log("event: " + event);
    emit.apply(server, arguments);
};

var counter = 0;
server.on("request", function(req, res) {
    res.end("Hello World ! " + ++counter);
});