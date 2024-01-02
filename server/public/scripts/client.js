const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');

// console.log('client.js is sourced!');
// function onReady() {
//     console.log('client.js is sourced!');
//     getCalcHistory();
// };

// onReady();

function Calc(event){
    event.preventDefault();
    console.log('in handle submit');
    postToServer();
    //updateHistory();
};
// function getCalcHistory() {
//     console.log('Getting calculations history...');
//     axios({
//       method: 'GET',
//       url: '/calculations',
//     })
//       .then(function (response) {
//         renderHistory(response.data);
//       })
//       .catch(function (error) {
//         console.log('Error getting calculations history', error);
//         alert('Sorry. Something bad happened. Try again later.');
//       });
// };

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
        console.log('numOne', currentRound.numOne);
        let answer = (currentRound.numOne + currentRound.numTwo);
        console.log('test addition', answer);
    axios
        .post('/calculations', currentRound)
        .then((response) => {
            firstNum.value = '';
            secondNum.value = '';
    });    
    };

// function renderHistory(calculations) {
//     console.log('rendering inventory to the DOM');
  
//     let resultHistory = document.getElementById('resultHistory');
  
//     // empty the output element
//     resultHistory.innerHTML = '';
  
//     // loop through the calculations to display them
//     for (let item of calculations) {
//       // Append the item to the DOM
//       resultHistory.innerHTML += `
//             <li>
//               <p>${calculations.numOne} ${calculations.operator} ${calculations.numOne} = ${calculations.result}</p>
//             </li>`;
//     }
//   };
