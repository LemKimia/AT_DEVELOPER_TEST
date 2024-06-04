export interface Country {
    name: {
        common: string
        official: string
    }
    currencies: Currencies
    capital: string
    languages: string
    maps: {
        googleMaps: string
    }
    continents: string
    flags: {
        png: string
        alt: string
    }
}

export interface Currencies {
    AOA: {
        name: string
        symbol: string
    }
}