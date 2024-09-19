import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';
import { Country } from './country.interface';

@Injectable()
export class CountryService {
    constructor(private readonly httpService: HttpService) {}

    async getCountryData(): Promise<Country[]> {
        const url = 'https://restcountries.com/v3.1/all';
        try {
            const response = await firstValueFrom(this.httpService.get(url));
            return response.data as Country[];
        } catch (error) {
            console.error('Error fetching country data:', error.message);
            throw new InternalServerErrorException('Failed to fetch country data.');
        }
    };

    // Sort countries by population
    async getCountriesSortedByPopulation(order: 'asc' | 'desc' = 'asc'): Promise<Country[]> {
        const countries = await this.getCountryData();
        return countries.sort((a, b) => {
            return order === 'asc'
            ? a.population - b.population
            : b.population - a.population;
        });
    };

    // Filter countries by region
    async getCountriesByRegion(region: string): Promise<Country[]> {
        const countries = await this.getCountryData();
        return countries.filter(country => country.region.toLowerCase() === region.toLowerCase());
    };

    // Search functionality to find countries by name or capital.
    async searchCountries(query: string): Promise<Country[]> {
        const countries = await this.getCountryData();
        return countries.filter(country =>
            country.name.common.toLowerCase().includes(query.toLowerCase()) ||
            (country.capital && country.capital[0].toLowerCase().includes(query.toLowerCase()))
        );
    };


}
