var express = require('express');
var router = express.Router();
var premiere = require('../models/premiere.js');
var bcrypt = require('bcrypt');
const login = [];
const users = [];
//Setup Routes

// Index Redirect
router.get('/login', function(req, res) {
  res.render('login.handlebars');
});
router.post('/login', function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    var newlogin = {
      email: req.body.email,
      password: hash
    };
    console.log(newlogin);
    login.push(newlogin);
    console.log('login array');
    console.log(login);
    // res.render(‘index’);
    res.redirect('index');
  });
});
router.get('/register', function(req, res) {
  res.render('register.handlebars');
});
router.post('/register', function(req, res) {
  // (async () => {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    var newUser = {
      name: req.body.name,
      email: req.body.email,
      password: hash
    };
    premiere.create(
      ['username', 'email', 'password'],
      [newUser.name, newUser.email, newUser.password],
      function(result) {
        console.log(result);
        res.redirect('/login');
      }
    );
    console.log(newUser);
    users.push(newUser);
    console.log('users array');
    console.log(users);
    // res.render(‘login’);
    //res.redirect(‘/login’);
  });
});

router.get('/', function(req, res) {
  res.redirect('login');
  // res.render('index');
});

// Index Page
router.get('/index', function(req, res) {
  premiere.selectAllinf(function(data) {
    // console.log(data);

    var list = { cars: data };
    //console.log(hbsObject);
    res.render('index', list);
  });
});

// Create a New Burger
router.get('/about/model/:model', function(req, res) {
  premiere.selectOne(req.params.model, function(data) {
    // console.log('model name in routes: ' + req.params.model);
    // console.log('data in premier/models route: ' + JSON.stringify(data));
    var hbsObject = { cars: data };
    res.render('about', hbsObject);
  });
});

// dealer
// router.post('/dealer/add', function(req, res) {
//   console.log("user all: " +req.body.all);
//     premiere.insertDealer(req.body.all, function(results){
//       console.log("result after commenting: " +results);
//       res.redirect("dealer")
//     })
//   })
router.post('/dealer/add', function(req, res) {
  console.log(JSON.stringify(req.body));
  premiere.createcar(
    [
      'carId',
      'make',
      'model',
      'engDscr',
      'photo',
      'fuelType1',
      'VClass',
      'trany',
      'createdOn',
      'fuelCost08'
    ],
    [
      req.body.carId,
      req.body.make,
      req.body.model,
      req.body.engDscr,
      req.body.photo,
      req.body.fuelType1,
      req.body.VClass,
      req.body.trany,
      req.body.createdOn,
      req.body.fuelCost08
    ],
    function(result) {
      console.log('result after commenting: ' + result);
      res.redirect('/dealer');
    }
  );
});

router.get('/dealer', function(req, res) {
  premiere.selectAllinf(function(data) {
    var hbsObject = { cars: data };
    //console.log(hbsObject);
    res.render('dealer', hbsObject);
  });
});

router.post('/add/comment', function(req, res) {
  console.log('user comment: ' + req.body.comment);
  premiere.insertComment('comment', req.body.comment, function(results) {
    console.log('result after commenting: ' + results);
    res.redirect('about');
  });
});

router.delete('/dealer/create/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('model name in routes: ' + condition);
  premiere.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes
module.exports = router;
