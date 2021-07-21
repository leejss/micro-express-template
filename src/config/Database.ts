import { Connection, createConnection } from "typeorm";
import { logger } from "../common/logger";
import { Person } from "../entity/Person";

export class DbConfig {
  public connection: Connection;
  constructor() {
    this.connect();
  }

  private async connect() {
    try {
      this.connection = await createConnection({
        type: "mongodb",
        host: "localhost",
        port: 27017,
        database: "testdb",
        entities: [Person],
        synchronize: true,
      });
      logger.info(`Mongodb database connected`);
      console.log(this.connection.isConnected);
    } catch (error) {
      logger.error(error);
    }
  }
}
