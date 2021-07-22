import mongoose from "mongoose";

export class DbConfig {
  constructor() {}

  public async connect() {
    try {
      await mongoose.connect("mongodb://localhost:27017/testdb", {
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.info("Database has been connected");
    } catch (error) {
      console.error("Database connection error", error);
    }
  }
}
