var http = require('http');
var fs = require('fs');

function send404Message(response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 ERROR...");
    response.end();
}

function onRequest(request, response) {

    if (request.method == 'GET') {
        console.log(request.url);
        if (request.url == '/' || request.url == "/index.html") {
            response.writeHead(200, { "Context-Type": "text/html" });
            fs.createReadStream("./index.html").pipe(response);
        } else if (request.url == "/a.html") {
            console.log(1);
            response.writeHead(200, { "Context-Type": "text/html" });
            fs.createReadStream("./a.html").pipe(response);
        }
    } else {
        send404Message(response);
    }

}



http.createServer(onRequest).listen(3000);
console.log("Server");