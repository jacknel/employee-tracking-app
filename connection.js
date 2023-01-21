const mysql = require("mysql2");

const connection= mysql.createConnection({
    host: "localhost", user:"root", password: "", database: ""
})

connection.connect(function (err) {
    if (err) {
      console.log(err)
      return;
    }
  });
  

module.exports = connection;