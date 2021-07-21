import winston from "winston";

export const logger = winston.createLogger();

const env = "development";

if (env === "development") {
  logger.add(
    new winston.transports.Console({
      level: "verbose",
      handleExceptions: true,
    })
  );
}

process.on("unhandledRejection", (reason, p) => {
  logger.warn(
    "system level exceptions at, Possibly Unhandled Rejection at: Promise ",
    p,
    " reason: ",
    reason
  );
});
