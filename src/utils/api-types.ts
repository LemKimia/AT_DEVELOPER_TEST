export interface Country {
  name: {
    common: string;
    official: string;
  };
  currencies: { [key: string]: Currency };
  capital: string;
  languages: Language;
  maps: {
    googleMaps: string;
  };
  continents: string;
  region: string;
  subregion: string;
  flags: {
    png: string;
    alt: string;
  };
  population: number;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Language {
  [key: string]: string;
}
