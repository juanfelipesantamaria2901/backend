import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3001,
  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "",
  dbDatabase: process.env.DB_DATABASE || "",
  dbPort: process.env.DB_PORT || 1433,
  dbDialect: process.env.DB_DIALECT || "mssql",
  dbDialectOptions: {
    instanceName: process.env.DB_DIALECT_OPTIONS_INSTANCE_NAME || "SQLDEV",
  }
};
