import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://neondb_owner:npg_j2uM7KwzGSaR@ep-blue-poetry-a8andzjk-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [],
  synchronize: true, // Set to false in production
};
