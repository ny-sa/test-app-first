const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  res.send(`You got ${num1+num2}!`);
})

app.listen(1337, () => {
  console.log("Server is running on port 1337");
})