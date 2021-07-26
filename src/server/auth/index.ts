import express, { Request, Response, NextFunction } from "express";
import { spotifyApi } from "../app";
const authRouter = express.Router();

authRouter.get("/", (req: Request, res: Response, next: NextFunction): void => {
  const isLoggedIn: boolean = spotifyApi.isUserAuthorized();
  res.json({ authorized: isLoggedIn });
});

export default authRouter;
