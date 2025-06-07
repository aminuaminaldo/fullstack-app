import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Property } from '../entities/property.entity';

export const propertyFactory = setSeederFactory(Property, () => {
  const property = new Property();
  property.name = faker.location.street();
  property.price =
    Math.round(
      parseFloat(faker.commerce.price({ min: 100000, max: 1000000 })) * 100,
    ) / 100;
  property.description = faker.company.catchPhrase();
  return property;
});
