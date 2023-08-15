/*
let os = require("os");
let path = require("path");
let { readFileSync, writeFileSync } = require("fs");
let osInfo = {
  name: os.type(),
  release: os.release(),
  freeMem: os.freemem(),
  totalMem: os.totalmem(),
};

let joinedPath = path.join("/content", "sub", "test.txt");
let absolutPath = path.resolve(__dirname + joinedPath);
let absolutPath2 = path.resolve(__filename);

console.log(absolutPath, absolutPath2);


let res = readFileSync("./content/sub/test.txt", "utf8");

writeFileSync("./content/myTxt.txt", `Here is the test file output : ${res}`);

console.log(res);


let { readFile, writeFile } = require("fs");

readFile("./content/readFile.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  let data = result;
  writeFile(
    "./content/myTxt.txt",
    `I am inserting data to myTxt file ---> ${data}`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});


//How to read file and write something in the file
let { readFile, writeFile } = require("fs");
let data;
readFile("./content/readFile.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  data = result;
  writeFile(
    "./content/myTxt.txt",
    `I am inserting myTxt file multiple times ===> ${data}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
  readFile("./content/myTxt.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
});


//Create server using http module / built in module :

const http = require("http");
let { readFileSync } = require("fs");

let server = http.createServer((req, res) => {
  let data = readFileSync("./content/myTxt.txt", "utf8");
  res.write(`Server is listening to me .Thanks ::: ${data}`);

  res.end();
});

server.listen(5000, () => {
  console.log(`Server is listening..`);
});



//Routing in http module :
"use strict";
const http = require("http");
let PORT = 5000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`This is Home page  `);
  } else if (req.url === "/about") {
    res.end(`This is about page .`);
  } else {
    res.end(`
        <h3> Ooops .......</h2>
        <a href="/">Go back</a>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at the port ${PORT}`);
});


let _ = require("lodash");

let arr = [1, 2, [3, [4]]];

let newArr = _.flattenDeep(arr);

console.log(newArr);

*/
