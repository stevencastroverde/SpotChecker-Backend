var express = require('express');
var router = express.Router();
const knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('book')
  .then((books) => {
    console.log(books);
    res.json(books);

  });

});

module.exports = router;
