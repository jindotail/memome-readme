import { Request, Response } from "express";

export const handler = (req: Request, res: Response) => {
  res.status(200).end();
};

export default [handler];
