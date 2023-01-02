//Task1
// const http = require("http");
// const os = require("os");
// const path = require('path');

// http.createServer((req, res) => {

//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(`<h1> System information </h1>
//     <p> Current user name: ${os.hostname()} </p>
//     <p> Os type: ${os.type()} </p>
//     <p> System work time: ${os.uptime() / 60} minutes </p>
//     <p> Current work directory: ${path.dirname(__filename)} </p>
//     <p> Server file name: ${path.basename(__filename)} </p>`
//     );

//     res.end();
// })
//     .listen(5000);
// console.log("Server is running at http://127.0.0.1:5000/");

//Task2

const http = require('http');
const os = require('node:os');
const personalModule = require('./personalmodule.js');
let myDate = new Date();

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<p> Date of request: ${myDate} </p>
    ${personalModule.dayMessage(os.userInfo().username)}`
    // personalModule.name = os.userInfo().username;
    // personalModule.time = new Date();
    // let result = personalModule.getResult();
    // res.write(`${result}`);
    );
    res.end();
}).listen(8000);