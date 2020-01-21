const express = require("express");
const logger = require("morgan");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const studentsRouter = require("./routes/student");

const app = express();
//Use 3000 if port is not provided as command line input
const port = process.env.PORT || 3000;
const logFilePath = path.join(__dirname, "access.log");

app.use(express.urlencoded({ extended: false }));


//logging requests in access.log file
const logStream = fs.createWriteStream(logFilePath);
app.use(logger("combined", { stream: logStream }));

//setting up cross-domain XHR requests using cors
app.use(cors());
//setting up the routes
app.use("/student", studentsRouter);

app.listen(port, _ => console.log(`Listening to port ${port}`));