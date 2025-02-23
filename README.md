# Proyecto: Servidor en Node.js

Este proyecto demuestra cómo crear un servidor en Node.js desde un simple "Hola Mundo" hasta un servidor asíncrono que lee y envía archivos.

## Requisitos
- Node.js instalado
- Docker 

## Pasos

### 1) Hola Mundo Básico
Ejecutar el siguiente comando:
```bash
node index.js
```

### 2) Servidor HTTP simple
Ejecutar:
```bash
node server.js
```
Visitar en el navegador: [http://localhost:3000](http://localhost:3000)

### 3) Servidor síncrono con lectura de archivo
Crear un archivo `archivo.txt` con algún contenido y luego ejecutar:
```bash
node sync-server.js
```

### 4) Servidor asíncrono con lectura de archivo
Crear un archivo `archivo.txt` con algún contenido y luego ejecutar:
```bash
node async-server.js
```

### 5) Dockerizar la aplicación
Ejecutar los siguientes comandos para construir y correr el contenedor:
```bash
docker build -t node-server .
docker run -p 3000:3000 node-server
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

