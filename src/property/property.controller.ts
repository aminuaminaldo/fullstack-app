import { Body, Controller, Get, Param, Post, HttpCode, ParseIntPipe, Query, ParseBoolPipe } from '@nestjs/common';

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
    @HttpCode(202)
    createProperty(@Body() propertyData: any) { 
        return `Property created with data: ${JSON.stringify(propertyData)}`;
    }
}
