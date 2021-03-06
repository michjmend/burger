// Inside burger.js, import orm.js into burger.js
var orm = require("../config/orm.js");
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burger, cb) {
    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, devoured, cb) {
    orm.updateOne(id, devoured, function(res) {
      cb(res);
    });
  },
  // deleteOne: function(condition, cb) {
  //   orm.deleteOne("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};
// Export at the end of the burger.js file.
module.exports = burger;
