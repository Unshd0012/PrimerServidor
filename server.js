const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hola, mundo desde un servidor en Node.js\n");
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
