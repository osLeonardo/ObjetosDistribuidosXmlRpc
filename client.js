const xmlrpc = require('xmlrpc');

// Cria um cliente XML-RPC
const client = xmlrpc.createClient({ host: 'localhost', port: 8080, path: '/' });

const city = 'Florianópolis';

client.methodCall('GetWeather', [city], function (error, value) {
  if (error) {
    console.error('Erro:', error);
  } else {
    console.log('Previsão para', city);
    console.log('Temperatura:', value.Temperature);
    console.log('Umidade:', value.Humidity);
    console.log('Condição:', value.Condition);
  }
});
