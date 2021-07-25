import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import { SpotifyApiWrapper } from "./spotify/spotifyApi";
import { credentials } from "./spotify/spotifyCredentials";
import path from "path";
const app = express();

export const SpotifyApi = new SpotifyApiWrapper(credentials);

/* Middleware  - Body parsing */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static files */
app.use(express.static(path.join(__dirname, "../dist/")));

/* Spotify Authentication */
app.get("/login", (req: Request, res: Response, next: NextFunction): void => {
  const authorizeURL: string = SpotifyApi.getAuthorizeURL();
  res.redirect(authorizeURL);
});

/* Spotify Auth Callback - Getting and setting tokens on SpotifyApi for future requests */
app.get("/success", (req: Request, res: Response, next: NextFunction): void => {
  const code: string = String(req.query.code);
  SpotifyApi.getAccessToken(code);
  res.redirect("/");
});

app.get("/refresh", (req: Request, res: Response, next: NextFunction): void => {
  SpotifyApi.refreshAccessToken();
  res.sendStatus(200);
});

app.get("/logout", (req: Request, res: Response, next: NextFunction): void => {
  SpotifyApi.resetAccess();
  res.status(200).redirect("/");
});

// Root
app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

export default app;
