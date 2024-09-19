import { Controller, Get, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('countries')
export class CountryController {
    constructor(private readonly countryService: CountryService) {}

    @Get()
    async getAllCountries() {
        try {
            return await this.countryService.getCountryData();
        } catch (error) {
            throw new HttpException(error.message || 'An error occurred', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    @Get('sorted')
    async getCountriesSorted(@Query('order') order: 'asc' | 'desc') {
        try {
            return await this.countryService.getCountriesSortedByPopulation(order);
        } catch (error) {
            throw new HttpException(error.message || 'An error occurred', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    @Get('by-region')
    async getCountriesByRegion(@Query('region') region: string) {
        try {
            return await this.countryService.getCountriesByRegion(region);
        } catch (error) {
            throw new HttpException(error.message || 'An error occurred', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    @Get('search')
    async searchCountries(@Query('query') query: string) {
        try {
            return await this.countryService.searchCountries(query);
        } catch (error) {
            throw new HttpException(error.message || 'An error occurred', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
