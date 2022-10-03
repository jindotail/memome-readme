import express, { Request, Response } from "express";
import path from "node:path";
import svg from "./assets/svg/layout.svg";

async function startServer() {
  const app = express();

  app.get("/status", (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.get("/memome", (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname + svg));
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
