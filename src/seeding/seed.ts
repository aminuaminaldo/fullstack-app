import { pgConfig } from '../../dbConfig';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './main.seeder';
import { propertyFactory } from './property.factory';
import { userFactory } from './user.factory';
import { propertyFeatureFactory } from './propertyFeature.factory';

const options: DataSourceOptions & SeederOptions = {
  ...pgConfig,
  factories: [propertyFactory, userFactory, propertyFeatureFactory],
  seeds: [MainSeeder],
};

async function seed() {
  try {
    console.log('Initializing data source...');
    const datasource = new DataSource(options);

    console.log('Connecting to database...');
    await datasource.initialize();

    console.log('Synchronizing database schema...');
    await datasource.synchronize(true);

    console.log('Running seeders...');
    await runSeeders(datasource);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
}

seed();
