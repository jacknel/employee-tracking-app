const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost", user: "root", password: "", database: "employees"
});

connection.connect(function (err) {
    // if (err) {
    //   console.log(err)
    //   return;
    // }
    if(err) throw err
  });
    

module.exports = connection;