import React from 'react';
import CountryCard from './CountryCard';
import { Country } from './Country';

interface CountryGridProps {
    countries: Country[];
}


const CountryGrid: React.FC<CountryGridProps> = ({ countries }) => {
    return (
        <div className="row">
            {countries.map((country) => (
                <div className="col-md-4 mb-4" key={country.name}>
                    <CountryCard country={country} />
                </div>
            ))}
        </div>
    );
};

export default CountryGrid;