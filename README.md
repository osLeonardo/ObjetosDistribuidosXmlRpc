# ObjetosDistribuidosXmlRpc

Projeto de exemplo em Node.js que implementa um servidor e cliente XML-RPC para fornecer previsões de tempo simuladas.

## Requisitos

- Node.js (>=12)
- npm

## Instalação

```bash
npm install
```

## Uso

### Iniciar o servidor

```bash
node server.js
```

O servidor estará disponível em http://localhost:8080.

### Executar o cliente

```bash
node client.js
```

Digite o nome da cidade quando solicitado para ver a previsão do tempo.

## Como funciona

- O servidor aceita qualquer nome de cidade recebido via XML-RPC.
- Gera valores aleatórios porém plausíveis de temperatura, umidade e condição do tempo.
- O método exposto é `GetWeather`, que retorna `{ City, Temperature, Humidity, Condition }`.

## Estrutura de arquivos

- `server.js`: servidor XML-RPC que gera previsões de tempo.
- `client.js`: cliente de linha de comando para consultar o servidor.
- `package.json`: dependências e scripts do projeto.

## Exemplo de execução

```bash
> node client.js
Digite o nome da cidade para ver a previsão do tempo: São Paulo

📍 Previsão para São Paulo
🌡️ Temperatura: 23°C
💧 Umidade: 70%
🌥️ Condição: Nublado
```

## Contribuidores

- Leonardo Spilere
- Gustavo Fontana

## Licença

Este projeto está licenciado sob a licença MIT.