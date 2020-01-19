var payloadChecker = require('payload-validator');
var expectedPayload = {
    "id" :"" ,
    "name" : "",
    "course":"",
    "grade":""
};

const students = [{ id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95 }]

const newStudents = [];
newStudents.push(students[0]);


//get Student
const getStudents = function (req, res, next) {
  res.send(newStudents.filter(function (x) { return x !== null }));
}

//image upload
const imageUpload = function (req, res, next) {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  req.picture = file.filename;
  next()
}

//post student
const postStudent = function (req, res, next) {

  if(req.body) {
    var result = payloadChecker.validator(req.body,expectedPayload,["id","name","course","grade"],false);
    if(result.success) {
        const data = {
          id: req.body.id,
          name: req.body.name,
          course: req.body.course,
          picture: req.picture,
          grade: req.body.grade
        };
        newStudents.push(data);
        res.send(data)

        // res.json({"message" : "Payload is valid"});

    } else {
        res.json({"message" : result.response.errorMessage});
    }
} else {
    res.json({"message" : "payload not correct"});
}

  
}


//delete student
const deleteStudent = function (req, res, next) {
  let isDeleted = false;
  for (let i = 0; i < newStudents.length; i++) {
    if (newStudents[i].id == req.body.id) {
      delete newStudents[i];
      isDeleted = true;
    }
  }

  if (isDeleted) {
    res.status(201).json({ message: 'Student Deleted Successfully' });
    return;
  }
  res.status(404).json({ message: 'User not found' });
}


//exported modules

module.exports = { getStudents: getStudents, postStudent: postStudent, deleteStudent: deleteStudent, imageUpload: imageUpload }


//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

//json response of multer

/*
{
  "fieldname": "image",
  "originalname": "test1.jpg",
  "encoding": "7bit",
  "mimetype": "image/jpeg",
  "destination": "uploads/",
  "filename": "75bde67b9e96eeeb3aee55496bb48701",
  "path": "uploads\\75bde67b9e96eeeb3aee55496bb48701",
  "size": 46076
}
*/