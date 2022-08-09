var express = require('express');
var router = express.Router();

const messages = [{
    text: 'Hello',
    user: 'Amy',
    added: new Date().toLocaleDateString(),
  },
  {
    text: 'Hi',
    user: 'Charles',
    added: new Date().toLocaleDateString(),
  }
]

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Mini Message Board',
    messages: messages
  });
});

router.get('/new', (req, res, next) => {
  res.render('form', {
    title: 'Mini Message Board',
  });
});

router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.userMessage,
    user: req.body.userName,
    added: new Date().toLocaleDateString(),
  });
  res.redirect('/');
})

module.exports = router;