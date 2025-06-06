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

const datasource = new DataSource(options);
datasource.initialize().then(async () => {
  await datasource.synchronize(true);
  await runSeeders(datasource);
  process.exit();
});
