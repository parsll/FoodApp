import express, { Request, Response, NextFunction } from "express";
import helmet, { xssFilter } from "helmet";
import userRoutes from "./routes/User.routes";
import db from "./config/Database/database";
import adminRoutes from "./routes/Admin.routes";
import donationRoutes from "./routes/Donation.routes";
import cors from "cors";
import path from "path";

const app = express();

app.use(xssFilter());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
db();

//health check
app.get("/ping", (req: Request, res: Response) => {
  res.send("Healthy").status(200);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.info(
    `Incoming-> Method: [ ${req.method}] url:[${req.url}] IP: [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    console.info(
      `Incoming-> Method: [ ${req.method}] url:[${req.url}] IP: [${req.socket.remoteAddress}]  status:[${res.status}]`
    );
  });
  next();
});
process.once("SIGUSR2", function () {
  process.kill(process.pid, "SIGUSR2");
});

process.on("SIGINT", function () {
  // this is only called on ctrl+c, not restart
  process.kill(process.pid, "SIGINT");
});

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/donate", donationRoutes);

app.use(express.static("build"));
app.use("*", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.use("*", (req: Request, res: Response) => {
  return res.send("The Page isn't available in the website");
});
app.listen(9001);
