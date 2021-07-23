import express, { Request, Response, NextFunction } from "express";
import path from "path";
const app = express();

// Middleware
// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files
app.use(express.static(path.join(__dirname, "../../public")));

// Root
app.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "..", "../public/index.html"));
});

export default app;