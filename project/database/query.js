const connection_sql = require('./mysql_connection')

const loginQuery = (email, password)=>{
    return `SELECT * FROM user WHERE email='${email}' AND password='${password}'`
}

const registerQuery = (name, email, password, passHash) => {
    return `INSERT INTO user (name, email, password, hash) VALUES ('${name}', '${email}', '${password}','${passHash}')`
  };

  module.exports={
    loginQuery,
    registerQuery,
    connection_sql
  }