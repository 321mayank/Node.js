const http = require("http");
const mysql = require("mysql");

    const con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        connectionLimit: 1
    });

const server = http.createServer((req,res) => {
    if (req.url == '/employee'){
        if (req.method == 'GET')
        {
            con.query(`select * from newdb.employee`, (err, data)=>{
                console.log(data)
                res.end(JSON.stringify(data))
                
            });
        }
        else if (req.method == 'POST'){
            console.log(req.body, typeof req.body)
            res.end("Its a post Request")
        }
        
    }
    else {
            res.end("Unknown Resource")
    }
        
   


    // if (req.url == '/test')
    // { 
    //     res.end("You have requested for test data");

    // } else
    // {
    // console.log(req.method,req.url);
    // res.end("Unknown Resource");
    // }
} );

server.listen(8000, "localhost",() => {
    console.log("Listning");
});