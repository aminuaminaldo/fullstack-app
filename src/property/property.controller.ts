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
  Headers,
  Delete,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdpipe';
import { ZodValidationPipe } from './pipes/zodValidationpipe';
import {
  CreatePropertySchema,
  CreatePropertyZodDto,
} from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeaders } from './pipes/request-headers';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}
  @Get()
  getAllProperties() {
    return this.propertyService.getAllProperties();
  }

  @Get(':id')
  getPropertyById(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    return this.propertyService.getPropertyById(id, sort);
  }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  // @HttpCode(202)
  @UsePipes(new ZodValidationPipe(CreatePropertySchema))
  createProperty(
    // @Body() propertyData: CreatePropertyZodDto,
    @Body() propertyData: CreatePropertyDto,
    //   new ValidationPipe({
    //     forbidNonWhitelisted: true,
    //     whitelist: true,
    //     groups: ['create'],
    //     always: true,
    //   }),
  ) {
    return this.propertyService.createProperty(propertyData);
    // return `Property created with data: ${JSON.stringify(propertyData)}`;
  }

  @Patch(':id')
  updateProperty(
    // @Param('id', ParseIntPipe) id: number,
    // @Param() param: IdParamDto,
    @Param('id', ParseIdPipe) id,
    @Body() //   new ValidationPipe({
    //     forbidNonWhitelisted: true,
    propertyData: UpdatePropertyDto,
    //     whitelist: true,
    //     groups: ['update'],
    //     always: true,
    //   }),
    // @Headers() headers: HeadersDto,
    // @RequestHeaders(
    //   new ValidationPipe({ whitelist: true, validateCustomDecorators: true }),
    // )
    // headers: HeadersDto,
    @RequestHeaders(HeadersDto) headers: HeadersDto,
  ) {
    return this.propertyService.updateProperty(id, propertyData, headers);
    // return headers;
    // return `Property with ID: ${id} updated with data: ${JSON.stringify(propertyData)}`;
  }

  @Delete(':id')
  deleteProperty(@Param('id', ParseIntPipe) id: number) {
    return this.propertyService.deleteProperty(id);
    // return `Property with ID: ${id} deleted successfully`;
  }
}
