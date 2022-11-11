import express from "express";
import layout from "./layout";
import status from "./status";

const router = express.Router();

router.get("/status", status);
router.get("/v1/layout/:userId", layout);

export default router;
