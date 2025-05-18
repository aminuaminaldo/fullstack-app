import { Body, Controller, Get, Param, Post, HttpCode } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    getAllProperties() {
        return 'All properties';
    }

    @Get(':id/:slug')
    getPropertyById(@Param('id') id: string, @Param('slug') slug: string) {
        return `Property with ID: ${id} and slug: ${slug}`;
    }

    @Post()
    @HttpCode(202)
    createProperty(@Body() propertyData: any) { 
        return `Property created with data: ${JSON.stringify(propertyData)}`;
    }
}
