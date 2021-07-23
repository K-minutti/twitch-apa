import express, { Request, Response, NextFunction } from "express";
import path from "path";
const app = express();

const PORT: number = 8000;

// Middleware
// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files
app.use(express.static(path.join(__dirname, "../public")));

// Root
app.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, (): void => {
  console.log(`Server is listening on port ${PORT}
  Visit at http://localhost:${PORT}/
  `);
});
