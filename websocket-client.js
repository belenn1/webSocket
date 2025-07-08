import WebSocket from "ws";
import process from "process";

// Conectar al servidor WebSocket
const client = new WebSocket("ws://localhost:8080");

// Escuchar mensajes del servidor
client.on("message", (message) => {
  console.log(`Mensaje recibido del servidor: ${message}`);
});

// Enviar un mensaje al servidor una vez conectado
client.on("open", () => {
  console.log("Conectado al servidor WebSocket.");
  client.send("¡Hola desde el cliente!");
});

// Manejar cierre de conexión
client.on("close", () => {
  console.log("Conexión cerrada.");
});

console.log("Escribe tu nombre:");
const stdin = process.openStdin();

stdin.addListener("data", (mensaje) => {
  const mensaje_a_enviar = mensaje.toString()
  client.send(mensaje_a_enviar)

})
