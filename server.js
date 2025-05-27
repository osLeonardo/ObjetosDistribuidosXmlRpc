const xmlrpc = require("xmlrpc");
const server = xmlrpc.createServer({ host: "localhost", port: 8080 });

console.log("Servidor XML-RPC rodando em http://localhost:8080");

function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const clima = {
  Florianópolis: {
    Temperature: "26°C",
    Humidity: "65%",
    Condition: "Ensolarado com nuvens",
  },
  "São Paulo": {
    Temperature: "23°C",
    Humidity: "70%",
    Condition: "Chuva fraca",
  },
  Curitiba: {
    Temperature: "18°C",
    Humidity: "80%",
    Condition: "Nublado",
  },
  "Rio de Janeiro": {
    Temperature: "30°C",
    Humidity: "60%",
    Condition: "Muito calor e sol",
  },
  Criciúma: {
    Temperature: "22°C",
    Humidity: "75%",
    Condition: "Parcialmente nublado",
  },
};

const cidadeIndex = {};
for (const nomeOriginal in clima) {
  const nomeNormalizado = normalizeText(nomeOriginal);
  cidadeIndex[nomeNormalizado] = nomeOriginal;
}

server.on("GetWeather", function (err, params, callback) {
  const inputCidade = params[0];
  const normalizada = normalizeText(inputCidade);

  console.log(`Requisição recebida para cidade: ${inputCidade}`);

  const nomeCorreto = cidadeIndex[normalizada];

  if (nomeCorreto) {
    const dados = clima[nomeCorreto];
    callback(null, {
      City: nomeCorreto,
      ...dados,
    });
  } else {
    callback(null, { Erro: `Cidade '${inputCidade}' não encontrada.` });
  }
});
