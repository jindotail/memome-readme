import express from "express";
import path from "node:path";
import img from "./assets/images/memome.png";

async function startServer() {
  const app = express();

  app.get("/status", (req, res) => {
    res.status(200).end();
  });

  app.get("/memome", (req, res) => {
    res.sendFile(path.resolve(__dirname + img));
  });

  app.listen(9000, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${9000} 🛡️
      ################################################
    `);
  });
}

startServer();
