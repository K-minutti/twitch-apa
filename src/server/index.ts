import dotenv from "dotenv";
dotenv.config();

import app from "./app";
const PORT: string | number = process.env.PORT || 8000;

app.listen(PORT, (): void => {
  console.log(`Server is listening on port ${PORT}.
    `);
});
