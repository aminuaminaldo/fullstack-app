import { Body, Controller, Get, Param, Post, Patch, HttpCode, ParseIntPipe, Query, ParseBoolPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';

@Controller('property')
export class PropertyController {
    @Get()
    getAllProperties() {
        return 'All properties';
    }

    @Get(':id')
    getPropertyById(@Param('id', ParseIntPipe) id: number, @Query('sort', ParseBoolPipe) sort: boolean) {
        console.log(typeof id);
        console.log(typeof sort);
        return `Property with ID: ${id}`;
    }

    @Post()
    // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    // @HttpCode(202)
    createProperty(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true , groups: ['create']})) propertyData: CreatePropertyDto) { 
        return `Property created with data: ${JSON.stringify(propertyData)}`;
    }

    @Patch(':id')
    updateProperty(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true , groups: ['update']})) propertyData: CreatePropertyDto) {
        return `Property with ID: ${id} updated with data: ${JSON.stringify(propertyData)}`;
    }
}