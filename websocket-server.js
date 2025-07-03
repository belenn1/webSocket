import { WebSocketServer } from "ws";

// Crear un servidor WebSocket
const server = new WebSocketServer({ port: 8080 });
const clients = new Set();

console.log("Servidor WebSocket ejecutándose en ws://localhost:8080");

// Manejar nuevas conexiones
server.on("connection", (socket) => {
  clients.add(socket);
  console.log("Cliente conectado.");

  socket.on("message", (message) => {
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        console.log(message);
        client.send(message);
      }
    });
  });

  // Manejar cierre de conexión
  socket.on("close", () => {
    console.log("Cliente desconectado.");
  });
});
