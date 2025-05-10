const { log } = require('node:console');
const fs = require('node:fs');
const { CLIENT_RENEG_WINDOW } = require('node:tls');
// fs.appendFile ("hello.txt", " cuz i'm inlove hahaha", function(err){
// if(err) console.error(err)
//     else console.log("done");

// }
// )
// fs.rename ("hello.txt", "vacation.txt", function(err){
//     if(err) console.error(err)
//         else console.log("done hai vai");
// })


// fs.copyFile ("vacation.txt", ".cl/copy/copy.txt", function(err){
//     if(err) console.log(err)
//         else console.log("done")
// })

// fs.unlink ("vacation.txt", function(err){
//     if(err) console.log(err.message)
//         else console.log("done")
// })

// fs.rm ("./copy", {recursive : true}, function(err){
//     if(err) console.log(err)
//         else console.log("done")
// })

// fs.readFile ("hh.txt", function(err, data){
//     if(err) console.log(err.message)
//         else console.log("done");
// } )
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080