const router = require('express').Router();
const mocks = require('./mock');

const reply = (res, body, timeout = 300, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body);
  }, timeout);

router.get('/allNotes', function (req, res, next) {
  reply(res, mocks.allNotes);
});


module.exports = router;
