import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const app = express();

const my_client_id = process.env.CLIENT_ID!;
const redirect_uri = process.env.REDIRECT_URI!;

/* Middleware */
// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files
app.use(express.static(path.join(__dirname, "../dist/")));

//
app.get("/login", (req: Request, res: Response, next: NextFunction): void => {
  const scopes: string = "user-read-private user-read-email";
  res.redirect(
    "https://accounts.spotify.com/authorize" +
      "?response_type=code" +
      "&client_id=" +
      my_client_id +
      (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri)
  );
});

app.get("/success", (req: Request, res: Response, next: NextFunction): void => {
  res.send("YOU LOGGED IN!");
});

// Root
app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

export default app;
