const config = require("config");
const mysql = require("mysql");
let connection = null;

module.exports.QueryMySQL = function () {
  let local_arguments = arguments;

  return new Promise(function (resolve, reject) {
    if (!connection) {
      let config_mysql = config.get(
        (process.env.DATABASE || "joon") + ".db.mysql"
      );
      connection = mysql.createPool({
        host: config_mysql.host,
        user: config_mysql.user,
        password: config_mysql.password,
        database: config_mysql.database,
        connectionLimit: config_mysql.max_connections,
        multipleStatements: config_mysql.multipleStatements,
      });
      console.log("MySQL Pool Have Been Inited.");
    }

    if (local_arguments.length !== 1 && local_arguments.length !== 2) {
      return reject("Wrong arguments number.");
    }

    let sql = local_arguments[0];
    let params = local_arguments[1];
    if (typeof params !== "object") {
      connection.query(sql, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } else {
      connection.query(sql, params, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }
  });
};
