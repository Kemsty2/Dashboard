var express = require('express');
var router = express.Router();

//  Login User
router.get('/login', function(req, res) {
  res.render('users/login', {title: 'Login ASCEFCA', layout: null});
});

router.post('/login', (req, res) => {
  //  Route Post Pour Le LOGIN
  res.redirect('/');
});

router.get('/profile', (req, res) => {
  res.render('users/profile', {title: 'User Profile'});
});

module.exports = router;
