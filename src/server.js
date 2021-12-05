const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT,console.log(`Sever is running on ${PORT}`));