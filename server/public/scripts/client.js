const firstNum = document.querySelector('#firstNum');
const secondNum = document.querySelector('#secondNum');

function onReady() {
    console.log('client.js is sourced!');
//    getCalculations();
};

onReady();

function Calc(event){
    event.preventDefault();
    console.log('in handle submit');
    postToServer();
    renderCurrentCalc();
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

function renderCurrentCalc() {
    console.log('rendering current calculation to the DOM');

};

