const express = require('express');
const app = express();
let PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:  
let result;


//MOVED TO SEPARATE MODULE
//const calculatorRouter = require('./routes/calculator-router');
let calculations = require('./data/calculations-data');
//[
  // {
  //     numOne: 10,
  //     numTwo: 20,
  //     operator: '+',
  //     result: 30,
  // },
//];

// Here's a wonderful place to make some routes:

app.post('/calculations', (req, res) => {
  let currentRound = req.body;
  console.log('current round on server side', currentRound);
  //console.log('POST current round numOne value', currentRound.numOne);
  //result = (currentRound.numOne+currentRound.numTwo);
  //console.log('result is', result);
  doMath(currentRound);
  //calculations.push(currentRound);
  //console.log('in POST updated calculations', calculations);
  console.log('result from calculations is', result);
  currentRound.result = result;
  calculations.push({numOne: Number(currentRound.numOne), numTwo: Number(currentRound.numTwo), operator: currentRound.operator, result: Number(currentRound.result)});
  console.log('updated calculations list is', calculations);
  res.sendStatus(201);
});

function doMath (mathList){
  console.log('in doMath');
  //result = (mathList.numOne+mathList.numTwo)
  // if (mathList.operator == '+'){result = (mathList.numOne+mathList.numTwo)}
  // else if (mathList.operator == '-'){result = (mathList.numOne-mathList.numTwo)}
  // else if (mathList.operator == '*'){result = (mathList.numOne*mathList.numTwo)}
  // else {result = (mathList.numOne%mathList.numTwo)}
//console.log('result is', result);
  //};
  let parseNumOne = parseInt(mathList.numOne);
  let parseNumTwo = parseInt(mathList.numTwo);
  let operator = mathList.operator;
  console.log('numOne parseNumOne', parseNumOne);
  console.log('numTwo now parseNumTwo', parseNumTwo);
switch (operator){
  case "+":
    result = (parseNumOne + parseNumTwo);
    break;
  case "-":
    result = (parseNumOne - parseNumTwo);
    break;
  case "*":
    result = (parseNumOne * parseNumTwo);
    break;
  case "/":
    result = (parseNumOne / parseNumTwo);
    break;
  default:
    console.log("ERROR: no such operator");
}
};

app.get('/calculations', function(req, res){
  console.log('in GET on server');
  console.log('calculations', calculations);
  res.send(calculations);
});

//Express routes
//app.use('/calculations', calculatorRouter);

// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
