import express, { Request, Response } from "express";
import path from "node:path";
import svg from "./assets/svg/layout.svg";
import layout from "./view/layout";

async function startServer() {
  const app = express();

  app.get("/status", (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.get("/layout", (req: Request, res: Response) => {
    res.writeHead(200, {
      "Content-Type": "image/svg+xml",
    });

    res.end(
      layout({
        id: "jindo",
        nickname: "진도",
        comment: ["꼬리 다녀감1", "꼬리 다녀감2"],
      })
    );
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
