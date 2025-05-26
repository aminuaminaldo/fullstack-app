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
  @UsePipes(new ZodValidationPipe(CreatePropertySchema))
  createProperty(
    @Body() propertyData: CreatePropertyZodDto,
    // @Body() propertyData: CreatePropertyDto,
    //   new ValidationPipe({
    //     forbidNonWhitelisted: true,
    //     whitelist: true,
    //     groups: ['create'],
    //     always: true,
    //   }),
  ) {
    return `Property created with data: ${JSON.stringify(propertyData)}`;
  }

  @Patch(':id')
  updateProperty(
    // @Param('id', ParseIntPipe) id: number,
    // @Param() param: IdParamDto,
    @Param('id', ParseIdPipe) id,
    @Body() //   new ValidationPipe({
    propertyData //     forbidNonWhitelisted: true,
    : CreatePropertyDto,
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
    return headers;
    // return `Property with ID: ${id} updated with data: ${JSON.stringify(propertyData)}`;
  }
}
