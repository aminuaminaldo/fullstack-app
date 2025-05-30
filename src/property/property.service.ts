import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}
  async getAllProperties() {
    return await this.propertyRepo.find();
  }

  async getPropertyById(id: number, sort: boolean) {
    // console.log(typeof id);
    // console.log(typeof sort);
    // return `Property with ID: ${id}`;
    const property = await this.propertyRepo.findOne({
      where: { id },
      order: sort ? { id: 'ASC' } : undefined,
    });
    if (!property)
      throw new NotFoundException(`Property with ID ${id} not found`);
    return property;
  }

  async createProperty(propertyData: CreatePropertyDto) {
    return await this.propertyRepo.save(propertyData);
  }

  async updateProperty(
    id: number,
    propertyData: UpdatePropertyDto,
    headers: any,
  ) {
    // console.log(`Headers: ${JSON.stringify(headers)}`);
    // You can add logic to update the property here
    // For example, you might interact with a database to update the property
    // For now, let's just return a message indicating the property was updated
    // return {
    //   id,
    //   propertyData,
    //   headers,
    // };
    // return `Property with ID: ${id} updated with data: ${JSON.stringify(propertyData)}`;
    return await this.propertyRepo.update({ id }, propertyData);
  }

  async deleteProperty(id: number) {
    const result = await this.propertyRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }
    return { message: `Property with ID ${id} deleted successfully` };
  }
}
