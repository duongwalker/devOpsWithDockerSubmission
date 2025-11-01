const http = require('http');
const PORT = process.env.PORT || 3000; // THIS LINE is CRITICAL!
const server = http.createServer((req, res) => {
  res.end('Hello Docker Homework!');
});
server.listen(PORT, () => {
  console.log('Server running on port', PORT);
});

