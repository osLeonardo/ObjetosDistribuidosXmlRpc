const xmlrpc = require("xmlrpc");
const server = xmlrpc.createServer({ host: "localhost", port: 8080 });

console.log("Servidor XML-RPC rodando em http://localhost:8080");

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const conditions = [
  "Ensolarado",
  "Parcialmente nublado",
  "Nublado",
  "Chuva fraca",
  "Chuva forte",
  "Tempestade",
  "Neve",
  "Neblina",
];

server.on("GetWeather", function (err, params, callback) {
  const inputCidade = params[0];
  console.log(`Requisição recebida para cidade: ${inputCidade}`);

  const temp = randomInRange(-5, 40);
  const humidity = randomInRange(20, 100);
  const condition = conditions[randomInRange(0, conditions.length - 1)];

  callback(null, {
    City: inputCidade,
    Temperature: `${temp}°C`,
    Humidity: `${humidity}%`,
    Condition: condition,
  });
});

server.on("NotFound", (method) => console.log(`Método não encontrado: ${method}`));
