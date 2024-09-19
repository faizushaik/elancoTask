export interface Country {
    name: {
        common: string;
        official: string;
        native?: { [key: string]: string };
    };
    cca2: string; // 2-letter country code
    cca3: string; // 3-letter country code
    ccn3: string; // Numeric country code
    cioc?: string; // International Olympic Committee code (optional)
    flags: {
        png: string;
        svg: string;
    };
    population: number; // Population
    region: string; // Region of the country
    subregion: string; // Subregion of the country
    capital?: string[]; // Capital city (optional, can be multiple)
    languages?: { [key: string]: string }; // Language codes and names (optional)
    currencies?: { [key: string]: { name: string; symbol: string } }; // Currency details (optional)
    timezones?: string[]; // Timezones (optional)
}