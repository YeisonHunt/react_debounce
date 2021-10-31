// let a = [1, 2, 3, 4, 5, 6];
// let b = a.pop();
// console.log(b);
var cors = require('cors');
const CircularJSON = require('circular-json');

const items = ["Italy", "Portugal","Spain"]

var express = require('express'),
  app = express(),
  server = require('http').createServer(app);

server.listen(3002, () => {
  console.log("server alive")
});
app.use(cors())
app.use(express.json())
// app.get('/:id', function (req, res) {
//   var id = req.params.id;
//   res.end("Received parameter:" + id);
//   console.log('id=' + id);
// });

app.post('/:number', function (req, res) {

  console.debug("req", { myReq: req.body })

  res.send("completado");
});

app.get('/items', (req,res)=> {
  res.status(200).send(items)
})



//Given this Node.js snippet from a real production system what expression suites the best in place of the XXX placeholder?

// var http = require('http');
// var server = http.createServer(function(request, response) {
//   response.end('Hello World');

//   console.log('do something now');

//   setTimeout(function() { async('later'); }, 3000);

//   function async(arg) {
//     console.log('do something '+arg);
//   }
// });

// server.listen(80,'domain');


// bigArray.filter(el => el > 5);

// bigArray.map(el => el*5);

// const myObject = {
//   property1:1,
//   property2:2,
//   property3:3
// }


// myObject.property1 = "owww yeah i ll get hired";

// const desctructurered = {
//   ...myObject,
//   property3: 2
// }

