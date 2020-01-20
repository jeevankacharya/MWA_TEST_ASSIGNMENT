var express = require('express');
var router = express.Router();
var { find, findOne, addlecture, deletelecture,search } = require('../controllers/lectures')

router.get('/find', find)
router.get('/findOne/:id', findOne)
router.post('/add', addlecture)
router.delete('/delete/:id', deletelecture)
router.get('/search/:q',search)

module.exports = router;



