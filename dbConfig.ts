import { Property } from './src/entities/property.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from './src/entities/user.entity';
import { PropertyFeature } from './src/entities/propertyFeature.entity';
import { PropertyType } from './src/entities/propertyType.entity';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://neondb_owner:npg_j2uM7KwzGSaR@ep-blue-poetry-a8andzjk-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
  type: 'postgres',
  port: 5432,
  entities: [Property, User, PropertyFeature, PropertyType],
  synchronize: true, // Set to false in production
};
