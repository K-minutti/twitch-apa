import express, { Request, Response, NextFunction } from "express";
const app = express();
const PORT: number = 8000;

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root
app.get("/", (req: Request, res: Response): void => {
  res.json({ message: "ROOT IS LIVE! HELLO" });
});

app.listen(PORT, (): void => {
  console.log(`Server is listening on port ${PORT}
  Visit at http://localhost:${PORT}/
  `);
});
