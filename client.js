const xmlrpc = require("xmlrpc");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = xmlrpc.createClient({
  host: "localhost",
  port: 8080,
  path: "/",
});

rl.question(
  "Digite o nome da cidade para ver a previsão do tempo: ",
  (city) => {
    client.methodCall("GetWeather", [city], function (error, value) {
      if (error) {
        console.error("Erro de conexão:", error.message);
      } else if (value.Erro) {
        console.log("Erro:", value.Erro);
      } else {
        console.log("\n📍Previsão para", value.City);
        console.log("🌡️ Temperatura:", value.Temperature);
        console.log("💧Umidade:", value.Humidity);
        console.log("🌥️  Condição:", value.Condition);
      }
      rl.close();
    });
  }
);
