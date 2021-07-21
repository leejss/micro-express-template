import { Server } from "http";
import { logger } from "../common/logger";
import { ExpressConfig } from "./Express";

export class Application {
  public server: Server;
  public express: ExpressConfig;

  constructor() {
    this.express = new ExpressConfig();
    const port = 5000;
    this.server = this.express.app.listen(port, () => {
      logger.info(`Server Started! Express: http://localhost:${port}`);
    });
  }
}
