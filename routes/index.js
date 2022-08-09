var express = require('express');
var router = express.Router();

const messages = [{
    text: 'Hello',
    user: 'Amy',
    added: new Date()
  },
  {
    text: 'Hi',
    user: 'Charles',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Message Board',
    messages: messages
  });
});

module.exports = router;