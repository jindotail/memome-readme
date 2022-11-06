import { NextFunction, Request, Response } from "express";
import { HttpStatusCode } from "../common/http";

const withError = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    res.status(HttpStatusCode.BAD_REQUEST);
    res.json({
      error: err.message,
    });
  }

  next();
};

export default withError;
