//connect framework
var connect = require('connect'); //importing modules
var http = require('http');

var app =connect();

function first( request, response , next){
    console.log("First");
    next();
}
function second( request , response ,next){
    console.log("second");
    next(); // next is use for calling the next object of app 
}

function profile( request,response){
    response.end("requested for profile")
}


app.use(first);
app.use(second);
app.use('/profile',profile);

http.createServer(app).listen(8888);    // useing app variable as request listner
console.log("server is up and running");