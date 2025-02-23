const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    fs.readFile("archivo.txt", "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error al leer el archivo.");
            return;
        }
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Servidor asíncrono corriendo en http://localhost:3000");
});
