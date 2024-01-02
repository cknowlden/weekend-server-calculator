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
let calculations = [
  // {
  //     numOne: 10,
  //     numTwo: 20,
  //     operator: '+',
  //     result: 30,
  // },
];

// Here's a wonderful place to make some routes:

// app.post('/calculations', (req, res) => {
//   currentRound = req.body;
//   console.log('current round on server side', currentRound);
//   calculations.push(currentRound);
//   res.sendStatus(201);
// });

app.post('/calculations', (req, res) => {
  currentRound = req.body;
  console.log('current round on server side', currentRound);
  calculations.push(currentRound);
  console.log('updated calculations', calculations);
  //result = 1+2;
  for (let inputs of currentRound){  
    if (currentRound.operator == '+'){currentRound.result = currentRound.numOne+currentRound.numTwo}
      else if (currentRound.operator == '-'){result = currentRound.numOne-currentRound.numTwo}
      else if (currentRound.operator == '*'){result = currentRound.numOne*currentRound.numTwo}
      else {result = currentRound.numOne%currentRound.numTwo}
      console.log('result is', result);
    }
    console.log('result is', result);
  calculations.result = result;
  calculations.push(calculations.result);
  res.sendStatus(201);
});

// function checkMath (mathList){
//   const newData = [];
//   for (let inputs of mathList){  
//     if (calculations.operator === '+'){calculations.result = calculations.numOne+calculations.numTwo}
//       else if (calculations.operator === '-'){calculations.result = calculations.numOne-calculations.numTwo}
//       else if (calculations.operator === '*'){calculations.result = calculations.numOne*calculations.numTwo}
//       else if (calculations.operator === '/'){calculations.result = calculations.numOne/calculations.numTwo}
//       //else {guesses.result = 'Too low'}
//       newData.push(calculations.result);
//   }
//   console.log('new data', newData);
// };

app.get('/calculations', function(req, res){
  console.log('in GET on server');
  //checkMath();
  res.send(calculations);
});

// app.post('/calculations', (req, res) => {
//   console.log('in POST');
//   calculations.push(newCalc);
//   res.sendStatus(201);
//   console.log('new calcuation list', calculations);
// });

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
