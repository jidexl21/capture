const http = require('http');
const logger = require("./logger");
const log = require("./config.json");

const server = http.createServer((req, res) => {

  if (req.url === '/logs') {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     let logs = logger.View(); 
     res.end(logs);
  }else{
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    req.on('end', () => {
        logger.Log(`${new Date()}\r\n${req.method} ${req.url}\r\nHeaders:\r\n${JSON.stringify(req.headers)}\r\n${body}\r\n\r\n`);
        res.end('OK'); 
    });
  }
});


server.listen(log.port, () => {
  console.log(`Http capture app listening on port ${log.port}`);
});
