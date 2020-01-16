const server = require("http").createServer();
const fs = require("fs");
const path = require("path");

const port = 5000;
const filePath = path.join(__dirname, "vid.mp4");

server
  .on("request", (req, res) => {
    var stat = fs.statSync(filePath);

    res.writeHead(200, {
      "Content-Type": "video/mp4",
      "Content-Length": stat.size
    });


    const data = fs.readFileSync(filePath, {
      "Content-Type": "video/mp4",
      "Content-Length": stat.size
    });
    res.write(data);

  })
  .listen(port, () => console.log(`Listening to port ${port}`));
