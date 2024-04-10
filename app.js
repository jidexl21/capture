const http = require('http');
const logger = require("./logger");
const log = require("./config.json");

const server = http.createServer((req, res) => {

    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        logger.Log(`${new Date()}\r\n${req.method} ${req.url}\r\nHeaders:\r\n${JSON.stringify(req.headers)}\r\n${body}\r\n\r\n`);
        res.end('OK'); 
    });
  // Routing
//   if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("OK");
//   } else if (req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('About page');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Page not found');
//   }
});


server.listen(log.port, () => {
  console.log(`Server listening on port ${log.port}`);
});
