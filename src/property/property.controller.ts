import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  HttpCode,
  ParseIntPipe,
  Query,
  ParseBoolPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';

@Controller('property')
export class PropertyController {
  @Get()
  getAllProperties() {
    return 'All properties';
  }

  @Get(':id')
  getPropertyById(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    console.log(typeof id);
    console.log(typeof sort);
    return `Property with ID: ${id}`;
  }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  // @HttpCode(202)
  createProperty(
    @Body() //   new ValidationPipe({
    //     whitelist: true,
    propertyData //     forbidNonWhitelisted: true,
    //     groups: ['create'],
    //     always: true,
    //   }),
    : CreatePropertyDto,
  ) {
    return `Property created with data: ${JSON.stringify(propertyData)}`;
  }

  @Patch(':id')
  updateProperty(
    // @Param('id', ParseIntPipe) id: number,
    // @Param() param: IdParamDto,
    @Param('id', ParseIdPipe) id,
    @Body() //   new ValidationPipe({
    //     whitelist: true,
    propertyData //     forbidNonWhitelisted: true,
    //     groups: ['update'],
    //     always: true,
    //   }),
    : CreatePropertyDto,
  ) {
    return `Property with ID: ${id} updated with data: ${JSON.stringify(propertyData)}`;
  }
}
