import express from "express";
import routes from "./routes";
import config from "./config";

async function startServer() {
  const app = express();

  app.use("/", routes);

  app.listen(config.port, () => {
    console.log(`
      ################################################
      🛡️  backend server uri: ${config.backendUri} 🛡️
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
  });
}

startServer();
