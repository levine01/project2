const fs = require("fs");
const path = require("path");

//creating a folder
//fs.writeFile(path.join(__dirname, "///test", hello.text), {}, (err) => {
// if (err) throw err;
// console.log("Folder created...");
//});

//creating and writing file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello Levine",
  (err) => {
    if (err) throw err;
    console.log("File written...");
  }
);
