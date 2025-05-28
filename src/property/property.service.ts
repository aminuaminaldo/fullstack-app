import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  getAllProperties() {
    return 'All properties';
  }

  getPropertyById(id: number, sort: boolean) {
    console.log(typeof id);
    console.log(typeof sort);
    return `Property with ID: ${id}`;
  }

  createProperty(propertyData: any) {
    return propertyData;
  }

  updateProperty(id: number, propertyData: any, headers: any) {
    console.log(`Headers: ${JSON.stringify(headers)}`);
    // You can add logic to update the property here
    // For example, you might interact with a database to update the property
    // For now, let's just return a message indicating the property was updated
    return {
      id,
      propertyData,
      headers,
    };
    // return `Property with ID: ${id} updated with data: ${JSON.stringify(propertyData)}`;
  }
}
