//Simple Web File Server

var http = require('http'); // importing http module
var fs = require('fs'); // importing file system

 // 404 response function
function error404(response){
    response.writeHead(404,{"Content-Type": "text/plain"});
    response.write("Error 404 : page not found");
    response.end();
}

function onRequest(request, response){ // creating function for response and request 
    if (request.method == 'GET' && request.url =='/'){
        response.writeHead(200,{"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else{
        error404(response);
    }
  


  
  
    //console.log("Request Made")
    //response.end("Here is the data")
} 

http.createServer(onRequest).listen(8888); // listing to the port 
console.log("server is now running");