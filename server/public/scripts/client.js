const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');


function onReady() {
    console.log('client.js is sourced!');
    getCalculations();
};

onReady();

function Calc(event){
    event.preventDefault();
    console.log('in handle submit');
    postToServer();
    getCalculations();
};

//post inputs to server
function postToServer(){
    console.log('in post to server');
    const currentRound = 
        {
            numOne: Number(firstNum.value),
            numTwo: Number(secondNum.value),
            operator: '+'
        }
        ;
        console.log('current round', currentRound);
        //console.log('numOne', currentRound.numOne);
        //let answer = (currentRound.numOne + currentRound.numTwo);
        //console.log('test addition', answer);
    axios
        .post('/calculations', currentRound)
        .then((response) => {
            firstNum.value = '';
            secondNum.value = '';
    });    
    };

// Get calculations from server and render to DOM
function getCalculations() {
    console.log('Getting calculations...');
    axios({
      method: 'GET',
      url: '/calculations',
    })
      .then(function (response) {
        renderHistory(response.data);
        renderRecent(response.data);
      })
      .catch(function (error) {
        console.log('Error getting calculations', error);
        alert('Sorry. Something bad happened. Try again later.');
      });
};

function renderHistory(calculations) {
    console.log('rendering calculations history to the DOM', calculations);
    //let resultHistory = document.getElementById('result-history');
    let resultHistory = document.querySelector('#result-history');
    resultHistory.innerHTML = '';

    // loop through the results to display them
    for (let item of calculations) {
      // Append the item to the DOM
      resultHistory.innerHTML +=  `
      <p>${item.numOne} ${item.operator} ${item.numTwo} = ${item.result} </p>
      `
    }
};

function renderRecent(calculations) {
  console.log('rendering recent calculation', Number(calculations.result));
  let resultCurrent = document.getElementById('recent-result');
  resultCurrent.innerHTML = '';

  // loop through the results to display them
  for (let item of calculations) {
    // Append the item to the DOM
    resultCurrent.innerHTML =  `
    <p>${item.result} </p>
    `
  }
};