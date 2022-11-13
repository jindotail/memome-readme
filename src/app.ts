import express from "express";
import nocache from "nocache";
import config from "./config";
import withError from "./middlewares/withError";
import routes from "./routes";

async function startServer() {
  const app = express();

  app.use(nocache());
  app.use("/", routes);
  app.use("/", withError);

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
