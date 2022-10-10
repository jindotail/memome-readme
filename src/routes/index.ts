import express from "express";
import layout from "./layout";

const router = express.Router();

router.get("/layout", layout);

export default router;
