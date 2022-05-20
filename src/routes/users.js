var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const {register, login} = require('../controllers/usersController');

router.get('/register', register);

router.get('/login', login);

<<<<<<<< HEAD:CeroTempo-Site/src/routes/users.js
module.exports = router;
========
module.exports = router;
>>>>>>>> develop:src/routes/users.js
