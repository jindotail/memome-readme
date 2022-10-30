import * as dotenv from "dotenv";

process.env.PHASE = process.env.PHASE || "dev";

const envPath = "./.env";
const envFound = dotenv.config({ path: envPath });
if (process.env.PHASE == "local" && envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  phase: process.env.PHASE,

  port: parseInt(process.env.PORT, 10) || 9000,
  backendUri: process.env.BACKEND_URI,
};
