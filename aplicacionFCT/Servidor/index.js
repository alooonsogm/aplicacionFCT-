const http = require('http');
const fsPromises = require('fs/promises');
const fs = require('fs');
const path = require('path');

const server = http.createServer(async (req, res) => {
    //La "/" es lo mismo que localhost:3000
    if (req.url === '/') {
        const data = await fsPromises.readFile('../index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url.match(/.png$/)) {
        const stream = fs.createReadStream('../imagenes/logo.png');
        res.writeHead(200, { 'Content-Type': 'image/png$' });
        stream.pipe(res);
    } else if (req.url.match(/.css$/)) {
        const stream = fs.createReadStream('../estilos.css', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        stream.pipe(res);
    } else if (req.url === '/sesiones/sesionIniciadaAdmin.html') {
        const data = await fsPromises.readFile('../sesiones/sesionIniciadaAdmin.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/index.html') {
        const data = await fsPromises.readFile('../index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesProfesor/formularioAlumnos.html') {
        const data = await fsPromises.readFile('../funcionesProfesor/formularioAlumnos.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesTutorDeCentro/formularioContactoEmpresa.html') {
        const data = await fsPromises.readFile('../funcionesTutorDeCentro/formularioContactoEmpresa.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesTutorDeCentro/formularioEmpresas.html') {
        const data = await fsPromises.readFile('../funcionesTutorDeCentro/formularioEmpresas.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesAdmin/formularioProfesores.html') {
        const data = await fsPromises.readFile('../funcionesAdmin/formularioProfesores.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/sesiones/sesionIniciadaTutorDeCentro.html') {
        const data = await fsPromises.readFile('../sesiones/sesionIniciadaTutorDeCentro.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/sesiones/sesionIniciadaProfesor.html') {
        const data = await fsPromises.readFile('../sesiones/sesionIniciadaProfesor.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesProfesor/editarAlumnos.htm') {
        const data = await fsPromises.readFile('../funcionesProfesor/editarAlumnos.htm', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesProfesor/editarEmpresas.html') {
        const data = await fsPromises.readFile('../funcionesProfesor/editarEmpresas.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesProfesor/editarContactosDeEmpresa.html') {
        const data = await fsPromises.readFile('../funcionesProfesor/editarContactosDeEmpresa.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesTutorDeCentro/asignarAlumnos.html') {
        const data = await fsPromises.readFile('../funcionesTutorDeCentro/asignarAlumnos.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesTutorDeCentro/asignarEstados.html') {
        const data = await fsPromises.readFile('../funcionesTutorDeCentro/asignarEstados.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesTutorDeCentro/asignarDatos.html') {
        const data = await fsPromises.readFile('../funcionesTutorDeCentro/asignarDatos.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesTutorDeCentro/asignarDatos2.html') {
        const data = await fsPromises.readFile('../funcionesTutorDeCentro/asignarDatos2.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesTutorDeCentro/asignarDatos3.html') {
        const data = await fsPromises.readFile('../funcionesTutorDeCentro/asignarDatos3.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesTutorDeCentro/asignarDatos4.html') {
        const data = await fsPromises.readFile('../funcionesTutorDeCentro/asignarDatos4.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else if (req.url === '/funcionesAdmin/editarProfesores.html') {
        const data = await fsPromises.readFile('../funcionesAdmin/editarProfesores.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 not found');
    }
});

server.listen(3000);
