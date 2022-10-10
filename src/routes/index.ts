import express from "express";
import layout from "./layout";
import status from "./status";

const router = express.Router();

router.get("/status", status);
router.get("/layout", layout);

export default router;
