// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var premiere = {
  selectAllinf: function(cb) {
    orm.selectAllinf(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  selectOne: function(model, cb) {
    orm.selectOne(model, function(res) {
      cb(res);
    });
  },
  selectAllDealer: function(cb) {
    orm.selectAllDealer(function(res) {
      cb(res);
    });
  },
  insertAll: function(cb) {
    orm.insertAll(function(res) {
      cb(res);
    });
  },
  // insertComment: function(comment, cb) {
  //   orm.insertComment(comment, function(res) {
  //     cb(res);
  //   });
  // },

  delete: function(condition, cb) {
    orm.delete('cars', condition, function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create('user', cols, vals, function(res) {
      cb(res);
    });
  },
  // insertDealer: function(all, cb) {
  //   orm.insertDealer( all, function(res) {
  //     cb(res);
  //   });
  // }
  createcar: function(cols, vals, cb) {
    orm.createcar('cars', cols, vals, function(res) {
      cb(res);
    });
  },
  
  create: function(cols, vals, cb) {
    orm.create('user', cols, vals, function(res) {
      cb(res);
    });
  }

  

};
module.exports = premiere;
