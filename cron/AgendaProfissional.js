const cron = require('node-cron');
var request = require('request');

function AgendaProfissional()
{
    request('https://agendamento.institutotozatodepsicologia.com/tarefa/agendaprofissional', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
      });
      
    console.log("Agenda profissional!");
}

module.exports = cron.schedule('*/59 * * * *', AgendaProfissional, {
    schedule : false
});
