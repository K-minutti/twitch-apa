import express, { Request, Response, NextFunction } from "express";
import { SpotifyApiWrapper } from "./spotify/spotifyApi";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();
app.use(cookieParser());

/* Middleware  - Body parsing */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Static files */
app.use(express.static(path.join(__dirname, "../dist/")));

/* Spotify Authentication */
app.get("/login", (req: Request, res: Response, next: NextFunction): void => {
  const spotifyApi = new SpotifyApiWrapper();
  const authorizeURL: string = spotifyApi.getAuthorizeURL();
  res.redirect(authorizeURL);
});

/* Spotify Auth Callback - Sending Cookies to use for future Requests*/
app.get("/success", (req: Request, res: Response, next: NextFunction): void => {
  const code: string = String(req.query.code);
  const spotifyApi = new SpotifyApiWrapper();
  spotifyApi
    .getAccessToken(code)
    .then((response) => {
      const expiresInTime: number = response.data["expires_in"];
      const accessToken: string = response.data["access_token"];
      const refreshToken: string = response.data["refresh_token"];
      const expirationTimeStamp: Date = new Date(
        Number(new Date()) + expiresInTime * 1000
      );
      res.cookie("token", accessToken, {
        expires: expirationTimeStamp,
        httpOnly: false,
      });
      res.cookie("refresh", refreshToken);
      res.redirect("/");
    })
    .catch((error) => {
      res.redirect("/");
    });
});

/* Request Spotify for new access token and updating cookie*/
app.get("/refresh", (req: Request, res: Response, next: NextFunction): void => {
  const refreshToken: string = String(req.query.refreshToken);
  const spotifyApi = new SpotifyApiWrapper();
  spotifyApi
    .refreshAccessToken(refreshToken)
    .then((response) => {
      console.log(response.data);
      const expiresInTime: number = response.data["expires_in"];
      const expirationTimeStamp: Date = new Date(
        Number(new Date()) + expiresInTime * 1000
      );
      res.cookie("token", response.data["access_token"], {
        expires: expirationTimeStamp,
        httpOnly: false,
      });
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});

app.get("/logout", (req: Request, res: Response, next: NextFunction): void => {
  res.clearCookie("token");
  res.clearCookie("refresh");
  res.status(204).redirect("/");
});

// Root
app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

export default app;
