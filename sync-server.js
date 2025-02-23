const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const data = fs.readFileSync("archivo.txt", "utf8");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(data);
});

server.listen(3000, () => {
    console.log("Servidor síncrono corriendo en http://localhost:3000");
});
