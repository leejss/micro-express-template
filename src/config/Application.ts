import { Server } from "http";
import { logger } from "../common/logger";
import { DbConfig } from "./Database";
import { ExpressConfig } from "./Express";

export class Application {
  public server: Server;
  public express: ExpressConfig;
  public db: DbConfig;

  constructor() {
    this.express = new ExpressConfig();
    this.db = new DbConfig();
    const port = 5000;
    this.server = this.express.app.listen(port, () => {
      logger.info(`Server Started! Express: http://localhost:${port}`);
    });
  }
}
