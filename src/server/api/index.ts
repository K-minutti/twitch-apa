import express, { Request, Response, NextFunction } from "express";
import { SpotifyApi } from "../app";
const apiRouter = express.Router();

apiRouter.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "You hit the /api endpoint" });
});

export default apiRouter;
