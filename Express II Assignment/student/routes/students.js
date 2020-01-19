var express = require('express');
var router = express.Router();
var multer = require('multer')
var upload = multer({
    dest: './assets/pics/',
    limits: {
        fileSize: 1000000
    },
})


let { getStudents, postStudent, deleteStudent, imageUpload } = require('../controllers/students')

/* GET users listing. */
router.get('/', getStudents);
router.post('/',upload.single('picture'),imageUpload,postStudent);
router.delete('/', deleteStudent);

module.exports = router;













// var storage = multer.diskStorage(
//     {
//         destination: './uploads/',
//         filename: function (req, file, cb) {
//             //req.body is empty...
//             //How could I get the new_file_name property sent from client here?
//             cb(null, file.originalname + '-' + Date.now() + ".jpg");
//         }
//     }
// );

// var upload = multer({ storage: storage });