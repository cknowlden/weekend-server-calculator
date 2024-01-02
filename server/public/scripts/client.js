// console.log('client.js is sourced!');
function onReady() {
    console.log('client.js is sourced!');
    getCalcHistory();
};

onReady();

function getCalcHistory() {
    console.log('Getting calculations history...');
    axios({
      method: 'GET',
      url: '/calculations',
    })
      .then(function (response) {
        renderHistory(response.data);
      })
      .catch(function (error) {
        console.log('Error getting calculations history', error);
        alert('Sorry. Something bad happened. Try again later.');
      });
};
