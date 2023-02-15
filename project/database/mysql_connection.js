const mysql = require('mysql')

const connection_sql =mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"root",
    database:'user',
    connectionlimit:1


    
})

// const check_connection = connection_sql.connect((err)=>{
//     if(err){
//         console.log(err)
//     }else{
//        console.log("Database connected")
//     }

//     connection_sql.query('SELECT * FROM newdb.emp', function (error, results, fields) {
//         if (error) throw error;
//         console.log(results);
//       });

// })

module.exports={
    connection_sql,
    // check_connection
};

