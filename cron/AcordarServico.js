const cron = require('node-cron');
var request = require('request');


function AcordarServico()
{
    request('https://agendamento.institutotozatodepsicologia.com/tarefa/AtualizarTarefa?tipotarefa=1', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
      
    console.log("Acordar Servico!");
}

module.exports = cron.schedule('*/25 * * * *', AcordarServico, {
    schedule : false
});
