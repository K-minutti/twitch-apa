import app from "./app";
const PORT: string | number = process.env.PORT || 8000;

app.listen(PORT, (): void => {
  console.log(`Server is listening on port ${PORT}.
    Visit at http://localhost:${PORT}/
    `);
});