// Import (require) connection.js into orm.js
var connection = require("../config/connection.js");
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll(), insertOne(), updateOne()
// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(burger, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)";
    console.log(queryString);

    connection.query(queryString, [burger], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(id, devoured, cb) {
    var queryString = "UPDATE burgers SET devoured =" + devoured + " WHERE id = " + id;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
//   deleteOne: function(table, condition, cb) {
//     var queryString = "DELETE FROM " + table;
//     queryString += " WHERE ";
//     queryString += condition;

//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   }
};

// Export the ORM object in module.exports.
module.exports = orm
