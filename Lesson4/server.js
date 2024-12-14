const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-type": "text/html" });
  res.write("<h1>hello</h1>");
  res.write("<h1>hello</h1>");
  res.end();
  // res.end("Hello. I am your first server");
});

myServer.listen(port, hostname, () => {
  console.log(`server is running successfully at http://${hostname}:${port}`);
});
