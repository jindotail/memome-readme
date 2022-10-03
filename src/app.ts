import express from "express";

async function startServer() {
  const app = express();

  app.get("/status", (req, res) => {
    res.status(200).end();
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
