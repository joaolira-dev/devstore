import express, { type NextFunction, type Request, type Response } from "express";
import cors from "cors";
import { routes } from "./routes/main.js";

const server = express();
server.use(cors());
server.use(express.static("public"));
server.use(express.json());

server.use(routes);

server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err)
  res.status(500).json({ error: "Ocorreu algum error interno" })
})

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log("DevStore backend is running in http://localhost:"+port)
})

