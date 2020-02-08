const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Calculator
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  res.send(`You got ${num1+num2}!`);
})

//BMI Calculator
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmicalculator/bmiCalculator.html');
})

app.post('/bmicalculator', (req, res) => {
  let kg = parseFloat(req.body.w);
  let cm = parseFloat(req.body.h);
  res.send(`Your BMI is ${kg/(cm/100)**2}`);
})

app.listen(process.env.PORT || 1337, () => {
  console.log("Server is running on port 1337");
})