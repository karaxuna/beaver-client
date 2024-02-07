const { WebSocket } = require('ws');
const path = require('path');
const fs = require('fs');

const configFilePath = path.resolve(
  __dirname, './proxy.json',
);

const configRaw = JSON.parse(
  fs.readFileSync(configFilePath, 'utf8').replaceAll('${TLD}', process.env.TLD),
);

const client = new WebSocket(`wss://${BEAVER_HOST}`, {
  headers: {
    'x-config': JSON.stringify(configRaw),
  },
});

client.once('close', () => {
  console.log('Client disconnected.');
});

client.once('error', (error) => {
  console.log('Client error:', error);
});

client.once('listening', () => {
  console.log('Client connected.');
});
