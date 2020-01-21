let express= require('express');

let router=express.Router();

let {find,findOne,addLecture,deleteLecture,search}=require('../controller/lectures');

router.get('/find',find);
router.get('/findOne/:id',findOne);
router.post('/add',addLecture);
router.delete('/delete/:id',deleteLecture);
router.get('/search/:q',search);
module.exports=router;