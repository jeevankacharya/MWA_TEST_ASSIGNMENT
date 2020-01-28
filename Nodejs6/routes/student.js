const express = require("express");

const students = [{id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95}]

const router =express.Router();

//get student by id
router.get("/api/:id", (req, res) => {
    console.log(req.params.id);
    res.send(
      JSON.stringify(students.filter(element => element.id == req.params.id))
    );
  });

  //get all student
  router.get("/api", (req, res) => {
  res.send(JSON.stringify(students));
});

//post student
router.post("/api", (req, res) => {
    const data = req.body || "";

    //Validate the data elements
    if (!data.id || !data.name || !data.course || !data.grade) {
      res.send("Error: data not in a correct format");
    }

    //create a new student object
  const newStudent = {
    id: req.body.id,
    name: req.body.name,
    course: req.body.course,
    picture:req.body.picture,
    grade: req.body.grade
  };
  students.push(newStudent);
  res.send(JSON.stringify(students));
});

//delete student by id
router.delete("/api/:id", (req, res) => {
    const arr = students.filter(element => element.id == req.params.id);
    res.send("Successfully deleted: " + JSON.stringify(arr));
  });
  
  module.exports = router;
  