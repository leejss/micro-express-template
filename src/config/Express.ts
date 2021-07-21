import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { useExpressServer } from "routing-controllers";
import { HelloWorld } from "../controllers/HelloWorld";

export class ExpressConfig {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.middleware();
    this.setUpControllers();
  }

  private middleware(): void {
    // mount middleware
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: false,
      })
    );
    this.app.use(cookieParser());
  }
  private setUpControllers(): void {
    useExpressServer(this.app, {
      controllers: [HelloWorld],
    });
  }
}
