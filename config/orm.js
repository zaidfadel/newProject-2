// Import MySQL connection.
var connection = require('../config/connection.js');
function printQuestionMarks(num) {
  var arr = [];
// <<<<<<< zaid4
  for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}
// testing
// Object for all our SQL statement functions.
var orm = {
  // selectAll: function(cb) {
  //   connection.query('SELECT * FROM cars ', function(err, result) {
  //     if (err) {
  //       throw err;
  //     }
  //     cb(result);
  //   });
  // },

  // <<<<<<< HEAD
  //   selectAllDealer: function(cb) {
  //     connection.query(
  //       'SELECT * FROM cars JOIN info ON cars.model = info.model',
  //       function(err, result) {
  // =======
// =======

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Object for all our SQL statement functions.
// var orm = {
  
// >>>>>>> master

  selectAllinf: function(cb) {
    connection.query('SELECT * FROM  cars', function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  selectOne: function(model, cb) {
    // console.log('model: ' + model);
    var query = 'SELECT * FROM  cars where ?';
    // console.log('query *****: ' + query);
    connection.query(query, { model: model }, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },

// <<<<<<< zaid4
  create: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table;
    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
}
      cb(result);
    });
  },
  

  selectAllDealer: function(cb) {
    connection.query(
      'SELECT * FROM cars JOIN info ON cars.id = info.id',
      function(err, result) {
        if (err) {
          throw err;
        }

        cb(result);
// >>>>>>> master
      },
//       cb(result);
//     });
//   },
  // insertComment: function (comment, cb) {
  //   connection.query("SELECT "+comment+ "FROM cars INNER JOIN info ON cars.id = info.carId",
  //      function (err, result) {
  //       if (err) {
  //         throw err;
  //       }


  //   connection.query(
  //     ' INSERT INTO  tableall SELECT cars.id,cars.make, cars.model,cars.eng_dscr,info.id,info.photo,info.model,info.drive,info.fuelType1,info.VClass,info.trany,info.createdOn,info.fuelCost08 FROM cars INNER JOIN info on cars.model = info.model ',
  //     function(err, result) {
  //       if (err) {
  //         throw err;
  //       }

  //       cb(result);
  //     }
  //   );
  // },

  // selectAllinf: function(cb) {
  //   connection.query('SELECT * FROM  info', function(err, result) {});

  //       cb(result);
  //     });

  // },
     

// <<<<<<< zaid4
  selectAllDealer: function(cb) {
    connection.query('SELECT * FROM cars ', function(err, result) {
if (err) {
        throw err;
      }

      cb(result);
    });
  },
  createcar: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols;
    queryString += ") ";
    queryString += "VALUES (";
    // queryString += vals;
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
// >>>>>>> master
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(table, condition, cb) {
    var queryString = 'DELETE FROM ' + table;
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }


};

module.exports = orm;
