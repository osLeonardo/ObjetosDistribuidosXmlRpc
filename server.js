const xmlrpc = require('xmlrpc');

// Cria um servidor XML-RPC
const server = xmlrpc.createServer({ host: 'localhost', port: 8080 });

console.log('Servidor XML-RPC rodando em http://localhost:8080');

// Implementa o método "GetWeather"
server.on('GetWeather', function (err, params, callback) {
  const city = params[0] || 'Unknown';

  const weatherData = {
    City: city,
    Temperature: '26°C',
    Humidity: '65%',
    Condition: 'Ensolarado com nuvens'
  };

  callback(null, weatherData);
});
