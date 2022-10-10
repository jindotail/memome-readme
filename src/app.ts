import express, { Request, Response } from "express";
import { requestGet } from "./utils/axios";
import layout from "./view/layout";
import routes from './routes'


async function startServer() {
  const app = express();

  app.get("/status", (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.use('/', routes)

  app.listen(9000, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${9000} 🛡️
      ################################################
    `);
  });
}

startServer();
