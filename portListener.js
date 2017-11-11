var http = require("http");

var PORT = 8080;
var PORT2 = 5000;

function handleRequest(request, response) {
    response.end("You are one sexy beast");

}

function handleRequest2(request, response) {
    response.end("You are missing a thumb");
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});

server2.listen(PORT2, function () {
    console.log("Listening on http://localhost:" + PORT2);
});