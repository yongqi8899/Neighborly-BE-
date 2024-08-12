import "./db/index.js";
import express from "express";
import cors from "cors";
import postRouter from "./routes/postsRouter.js";

import errorHandler from "./middlewares/errorHandler.js";
import dbInit from "./db/index.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: process.env.SPA_ORIGIN, credentials: true }));
app.use(express.json());

app.use("/post", postRouter)
app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));
app.use(errorHandler);

dbInit()

app.listen(port, () => console.log(`Server listening on port : ${port}`));