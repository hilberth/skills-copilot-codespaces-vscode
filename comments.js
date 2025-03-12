// Create web server
// Create a web server that listens for incoming requests on port 3000, and responds with the following JSON object when it receives a request:

// {
//   "status": "success",
//   "message": "You have successfully reached the web server"
// }
// The JSON object should be sent with a Content-Type header of application/json.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify({
    status: 'success',
    message: 'You have successfully reached the web server'
  }));
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});