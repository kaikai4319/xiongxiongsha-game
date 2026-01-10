const WebSocket = require('ws');
const GameRoom = require('./GameRoom');

const gameRooms = new Map();

function setupWebSocket(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('New WebSocket connection');

    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message);
        handleMessage(ws, data, gameRooms);
      } catch (error) {
        console.error('WebSocket message error:', error);
      }
    });

    ws.on('close', () => {
      console.log('WebSocket connection closed');
    });

    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
  });

  return wss;
}

function handleMessage(ws, data, gameRooms) {
  const { type, roomId, payload } = data;

  switch (type) {
    case 'JOIN_ROOM':
      // Handle join room logic
      break;
    case 'LEAVE_ROOM':
      // Handle leave room logic
      break;
    case 'GAME_ACTION':
      // Handle game action
      break;
    default:
      console.log('Unknown message type:', type);
  }
}

module.exports = setupWebSocket;
