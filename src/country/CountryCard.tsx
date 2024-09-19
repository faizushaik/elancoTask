import React from 'react';
import { Country } from './country.interface';
// import { Country } from './country';

interface CountryCardProps {
    country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    return (
        <div className="card">
            <img src={country.flag} alt={`${country.name} Flag`} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{country.name}</h5>
                <p className="card-text">Population: {country.population}</p>
                <p className="card-text">Capital: {country.capital}</p>
                <p className="card-text">Region: {country.region}</p>
            </div>
        </div>
    );
}

export default CountryCard;