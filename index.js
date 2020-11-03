require("dotenv").config();

const server = require("./server");

const PORT = process.env.PORT || 8000;
const ENV = process.env.NODE_ENV || "development";

server.listen(PORT, () => {
  console.debug(`Server is listening on port ${PORT} 🚀`);
  console.debug(`Current environment is ${ENV} 🎯`);
});
